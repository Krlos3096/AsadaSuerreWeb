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
import Wave, { displayName } from 'react-wavify';

function AppContent() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Router>
        <ScrollToTop />
        <AppBar />
        <Box sx={{ minHeight: "calc(100vh - 250px)" }}>
          <Routes>
            <Route path="/" element={<Noticias />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/gestiones" element={<Gestiones />} />
            <Route path="/gobernanza" element={<Gobernanza />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/nuestra-historia" element={<NuestraHistoria />} />
          </Routes>
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            height: {xs:"25%", md:"15%"},
          }}
        >
          <Wave mask="url(#mask)" fill="#04A6DB">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2000"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
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
