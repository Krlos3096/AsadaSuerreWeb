import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../AppAppBar/AppAppBar';
import MainContent from '../MainContent/MainContent';
import Latest from '../Latest/Latest';
import Footer from '../Footer/Footer';
import './Home.scss';
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat';

export default function Home(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
      <WhatsAppFloat />
    </AppTheme>
  );
}
