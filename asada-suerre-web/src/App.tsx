import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppTheme from './shared-theme/AppTheme';
import { 
  AppBar, 
  Home, 
  Noticias, 
  Gestiones, 
  Gobernanza, 
  NuestraHistoria, 
  Contactos,
  Footer, 
  ContactsContainer,
  ScrollToTop 
} from './components';
import './App.css';

function AppContent() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Router>
        <ScrollToTop />
        <AppBar />
        <Box sx={{ minHeight: 'calc(100vh - 160px)' }}>
          <Routes>
            <Route path="/" element={<Noticias />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/gestiones" element={<Gestiones />} />
            <Route path="/gobernanza" element={<Gobernanza />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/nuestra-historia" element={<NuestraHistoria />} />
          </Routes>
        </Box>
        <Footer />
        <ContactsContainer />
      </Router>
    </AppTheme>
  );
}

export default function App() {
  return <AppContent />;
}
