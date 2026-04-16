import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import { AppBar, Noticias, Footer, ContactsContainer } from '../index';
import './Home.scss';


export default function Home(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppBar />

      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
      >
        <Noticias />
      </Container>
      <Footer />
      <ContactsContainer />
    </AppTheme>
  );
}
