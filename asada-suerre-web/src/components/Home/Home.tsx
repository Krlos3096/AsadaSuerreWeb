import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import { AppBar, MainContent, Latest, Footer, ContactsContainer } from '../index';
import './Home.scss';
import { Box } from '@mui/material';
import headerImage from '../../assets/header-1.JPG';

export default function Home(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppBar />

      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '300px',
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 8, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
      <ContactsContainer />
    </AppTheme>
  );
}
