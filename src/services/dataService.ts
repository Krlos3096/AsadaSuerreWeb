import cardsData from '../assets/data/cards-data.json';
import usData from '../assets/data/us-data.json';
import timeItemsData from '../assets/data/time-items-data.json';
import homeData from '../assets/data/home-data.json';
import contactsData from '../assets/data/contacts-data.json';

export const DataService = {
  getCardsData: () => cardsData,
  getUsData: () => usData,
  getTimeItemsData: () => timeItemsData,
  getHomeData: () => homeData,
  getContactsData: () => contactsData,
  
  // Helper methods for filtered data
  getNewsData: () => cardsData.filter((item: any) => item.variant === 'news'),
  getServiceData: () => cardsData.filter((item: any) => item.variant === 'service'),
  getGovernanceData: () => cardsData.filter((item: any) => item.variant === 'governance'),
  getContactData: () => cardsData.filter((item: any) => item.variant === 'contact'),
  
  getStatsData: () => usData.statsData,
  getMission: () => usData.mission,
  getVision: () => usData.vision,
  
  getCarouselImages: () => homeData.carouselImages,
  
  getWhatsAppPhoneInfo: () => contactsData.whatsappPhoneInfo,
  getWhatsAppPhoneSupport: () => contactsData.whatsappPhoneSupport,
  getFacebookUrl: () => contactsData.facebookUrl,
};
