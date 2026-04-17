const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8787';

// Generic fetch wrapper
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// Interfaces matching the API responses
export interface Card {
  id: number;
  title: string;
  description: string;
  date?: string;
  image?: string;
  subtitle?: string;
  tag?: string;
  badge?: string;
  icon?: string;
  url?: string;
  google_maps_url?: string;
  variant: string;
  authors: Array<{
    id: number;
    name: string;
    avatar?: string;
  }>;
  items: Array<{
    id: number;
    item: string;
  }>;
}

export interface HomeSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  sort_order: number;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  sort_order: number;
}

export interface Stat {
  id: number;
  number: string;
  label: string;
  sort_order: number;
}

export interface AboutContent {
  id: number;
  content_type: string;
  title: string;
  content: string;
}

export interface Contacts {
  id: number;
  whatsapp_phone_info?: string;
  whatsapp_phone_support?: string;
  facebook_url?: string;
}

export interface UsData {
  statsData?: Stat[];
  mission?: { title: string; content: string };
  vision?: { title: string; content: string };
}

// Helper function to transform API response to match existing data structure
function transformCards(cards: Card[]): any[] {
  return cards.map(card => ({
    title: card.title,
    description: card.description,
    date: card.date,
    image: card.image,
    subtitle: card.subtitle,
    tag: card.tag,
    badge: card.badge,
    authors: card.authors.map(a => ({
      name: a.name,
      avatar: a.avatar
    })),
    icon: card.icon,
    items: card.items.map(i => i.item),
    url: card.url,
    googleMapsUrl: card.google_maps_url,
    variant: card.variant
  }));
}

function transformHomeSlides(slides: HomeSlide[]): any[] {
  return slides.map(slide => ({
    image: slide.image,
    title: slide.title,
    subtitle: slide.subtitle,
    description: slide.description
  }));
}

function transformTimelineItems(items: TimelineItem[]): any[] {
  return items.map(item => ({
    year: item.year,
    title: item.title,
    description: item.description,
    icon: item.icon,
    image: item.image
  }));
}

export const DataService = {
  // Cards
  getCardsData: async (): Promise<any[]> => {
    const cards = await apiFetch<Card[]>('/cards');
    return transformCards(cards);
  },
  
  getNewsData: async (): Promise<any[]> => {
    const cards = await apiFetch<Card[]>('/cards?variant=news');
    return transformCards(cards);
  },
  
  getServiceData: async (): Promise<any[]> => {
    const cards = await apiFetch<Card[]>('/cards?variant=service');
    return transformCards(cards);
  },
  
  getGovernanceData: async (): Promise<any[]> => {
    const cards = await apiFetch<Card[]>('/cards?variant=governance');
    return transformCards(cards);
  },
  
  getContactData: async (): Promise<any[]> => {
    const cards = await apiFetch<Card[]>('/cards?variant=contact');
    return transformCards(cards);
  },
  
  // Home slides
  getHomeData: async (): Promise<any[]> => {
    const slides = await apiFetch<HomeSlide[]>('/home-slides');
    return transformHomeSlides(slides);
  },
  
  getCarouselImages: async (): Promise<any[]> => {
    const slides = await apiFetch<HomeSlide[]>('/home-slides');
    return transformHomeSlides(slides);
  },
  
  // Timeline
  getTimeItemsData: async (): Promise<any[]> => {
    const items = await apiFetch<TimelineItem[]>('/timeline');
    return transformTimelineItems(items);
  },
  
  // Stats and About
  getUsData: async (): Promise<UsData> => {
    const [stats, mission, vision] = await Promise.all([
      apiFetch<Stat[]>('/stats'),
      apiFetch<AboutContent>('/about/mission'),
      apiFetch<AboutContent>('/about/vision')
    ]);
    
    return {
      statsData: stats,
      mission: mission ? { title: mission.title, content: mission.content } : undefined,
      vision: vision ? { title: vision.title, content: vision.content } : undefined
    };
  },
  
  getStatsData: async (): Promise<Stat[] | undefined> => {
    try {
      return await apiFetch<Stat[]>('/stats');
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      return undefined;
    }
  },
  
  getMission: async () => {
    try {
      const mission = await apiFetch<AboutContent>('/about/mission');
      return { title: mission.title, content: mission.content };
    } catch (error) {
      console.error('Failed to fetch mission:', error);
      return undefined;
    }
  },
  
  getVision: async () => {
    try {
      const vision = await apiFetch<AboutContent>('/about/vision');
      return { title: vision.title, content: vision.content };
    } catch (error) {
      console.error('Failed to fetch vision:', error);
      return undefined;
    }
  },
  
  // Contacts
  getContactsData: async (): Promise<Contacts> => {
    return await apiFetch<Contacts>('/contacts');
  },
  
  getWhatsAppPhoneInfo: async (): Promise<string | undefined> => {
    try {
      const contacts = await apiFetch<Contacts>('/contacts');
      return contacts.whatsapp_phone_info;
    } catch (error) {
      console.error('Failed to fetch contact info:', error);
      return undefined;
    }
  },
  
  getWhatsAppPhoneSupport: async (): Promise<string | undefined> => {
    try {
      const contacts = await apiFetch<Contacts>('/contacts');
      return contacts.whatsapp_phone_support;
    } catch (error) {
      console.error('Failed to fetch contact support:', error);
      return undefined;
    }
  },
  
  getFacebookUrl: async (): Promise<string | undefined> => {
    try {
      const contacts = await apiFetch<Contacts>('/contacts');
      return contacts.facebook_url;
    } catch (error) {
      console.error('Failed to fetch Facebook URL:', error);
      return undefined;
    }
  },
};
