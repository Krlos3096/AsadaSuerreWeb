import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import Chip from '@mui/material/Chip';
import newsData from '../../assets/news-data.json';
import GenericCard from '../GenericCard/GenericCard';
import { GenericCardData } from '../GenericCard/GenericCard';
import Search from '../Search/Search';
// Import images directly
import IMG_3657 from '../../assets/news-images/IMG_3657.JPG';
import IMG_3658 from '../../assets/news-images/IMG_3658.JPG';
import IMG_3660 from '../../assets/news-images/IMG_3660.JPG';
import IMG_3661 from '../../assets/news-images/IMG_3661.JPG';
import IMG_3680 from '../../assets/news-images/IMG_3680.JPG';
import IMG_3683 from '../../assets/news-images/IMG_3683.JPG';
import IMG_3685 from '../../assets/news-images/IMG_3685.JPG';
import IMG_3689 from '../../assets/news-images/IMG_3689.JPG';
import IMG_3698 from '../../assets/news-images/IMG_3698.JPG';
import IMG_3723 from '../../assets/news-images/IMG_3723.JPG';
import './Noticias.scss';

export default function Noticias() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Todo');
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  const categories = React.useMemo(() => {
    const uniqueTags = Array.from(new Set(newsData.map(item => item.tag)));
    return ['Todo', ...uniqueTags];
  }, []);

  const filteredNews = React.useMemo(() => {
    let filtered = newsData;
    if (selectedCategory !== 'Todo') {
      filtered = filtered.filter(item => item.tag === selectedCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  // Image mapping object
  const imageMap: { [key: string]: string } = {
    './news-images/IMG_3657.JPG': IMG_3657,
    './news-images/IMG_3658.JPG': IMG_3658,
    './news-images/IMG_3660.JPG': IMG_3660,
    './news-images/IMG_3661.JPG': IMG_3661,
    './news-images/IMG_3680.JPG': IMG_3680,
    './news-images/IMG_3683.JPG': IMG_3683,
    './news-images/IMG_3685.JPG': IMG_3685,
    './news-images/IMG_3689.JPG': IMG_3689,
    './news-images/IMG_3698.JPG': IMG_3698,
    './news-images/IMG_3723.JPG': IMG_3723,
  };

  // Transform news data to GenericCard format
  const transformedNews: GenericCardData[] = filteredNews.map((news) => ({
    id: news.id,
    title: news.title,
    description: news.description,
    date: news.date,
    image: imageMap[news.img] || news.img, // Use mapped image or fallback to original
    tag: news.tag,
    authors: news.authors,
    variant: news.variant as 'news' | 'default' | 'service' | 'governance' | 'contact'
  }));

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search value={searchQuery} onChange={handleSearchChange} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 3,
            overflow: "auto",
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              onClick={() => handleCategoryClick(category)}
              size="medium"
              label={category}
              sx={{
                backgroundColor:
                  selectedCategory === category
                    ? "primary.light"
                    : "transparent",
                color:
                  selectedCategory === category
                    ? "primary.contrastText"
                    : "text.primary",
                border: selectedCategory === category ? "none" : "1px solid",
                borderColor: "divider",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === category
                      ? "primary.light"
                      : "action.hover",
                },
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search value={searchQuery} onChange={handleSearchChange} />
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        {transformedNews.map((news, index) => (
          <Grid key={news.id} size={{ xs: 12, md: 6 }}>
            <GenericCard
              data={news}
              focused={focusedCardIndex === index}
              onFocus={handleFocus}
              onBlur={handleBlur}
              tabIndex={0}
              size="large"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
