import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import Chip from '@mui/material/Chip';
import newsData from '../../assets/news-data.json';
import GenericCard from '../GenericCard/GenericCard';
import { GenericCardData } from '../GenericCard/GenericCard';
import Search from '../Search/Search';
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

  // Transform news data to GenericCard format
  const transformedNews: GenericCardData[] = filteredNews.map((news, index) => ({
    id: index.toString(),
    title: news.title,
    description: news.description,
    image: news.img,
    tag: news.tag,
    authors: news.authors
  }));

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: { xs: 16, md: 32 },
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
              variant="news"
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
