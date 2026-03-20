import * as React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Footer.scss';

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container 
        maxWidth={false}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <FavoriteIcon 
            sx={{ 
              fontSize: '2rem',
              color: 'primary.main', // Match AppBar primary color
            }} 
          />
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: '0.875rem',
            }}
          >
            Esta página fue creada con amor por el agua potable y la comunidad de suerre
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
