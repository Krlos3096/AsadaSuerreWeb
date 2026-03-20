import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ReactComponent as LogoAsada } from '../../assets/asada-suerre-logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import headerImageMd from '../../assets/header-md.JPG';
import headerImageXs from '../../assets/header-xs.JPG';
import './AppBar.scss';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppBarComponent() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path: string) => {
    if (path === '/consulta-en-linea') {
      // Open external portal in new tab
      window.open('https://www.cisaweb.com/mclientes/', '_blank', 'noopener,noreferrer');
    } else {
      // Normal navigation for other routes
      navigate(path);
    }
    setOpen(false);
  };

  const isActive = (path: string) => {
    // ConsultaEnLinea opens in new tab, so it's never "active" in the app
    if (path === '/consulta-en-linea') {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px))",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '100px', md: '200px' },
          backgroundImage: { xs: `url(${headerImageXs})`, md: `url(${headerImageMd})` },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters sx={{ bgcolor: "#04A6DB", border: "1px solid black", top: '-50px' }}>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box
                component={LogoAsada}
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-25%)",
                  width: "8%",
                  objectFit: "contain",
                }}
              />
              <Button 
                variant="text" 
                color="primary" 
                size="small"
                onClick={() => handleNavigation('/noticias')}
                sx={{ 
                  backgroundColor: isActive('/noticias') ? 'primary.dark' : 'transparent',
                  color: isActive('/noticias') ? 'primary.contrastText' : 'inherit'
                }}
              >
                Noticias
              </Button>
              <Button 
                variant="text" 
                color="primary" 
                size="small"
                onClick={() => handleNavigation('/consulta-en-linea')}
                sx={{ 
                  backgroundColor: 'transparent',
                  color: 'inherit'
                }}
              >
                Consulta tu recibo
              </Button>
              <Button 
                variant="text" 
                color="primary" 
                size="small"
                onClick={() => handleNavigation('/gestiones')}
                sx={{ 
                  backgroundColor: isActive('/gestiones') ? 'primary.dark' : 'transparent',
                  color: isActive('/gestiones') ? 'primary.contrastText' : 'inherit'
                }}
              >
                Gestiones
              </Button>
              <Button 
                variant="text" 
                color="primary" 
                size="small"
                onClick={() => handleNavigation('/gobernanza')}
                sx={{ 
                  backgroundColor: isActive('/gobernanza') ? 'primary.dark' : 'transparent',
                  color: isActive('/gobernanza') ? 'primary.contrastText' : 'inherit'
                }}
              >
                Gobernanza 
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button 
              variant="text" 
              color="primary" 
              size="small"
              onClick={() => handleNavigation('/nuestra-historia')}
              sx={{ 
                backgroundColor: isActive('/nuestra-historia') ? 'primary.dark' : 'transparent',
                color: isActive('/nuestra-historia') ? 'primary.contrastText' : 'inherit'
              }}
            >
                Nuestra historia
              </Button>
            <Button color="primary" variant="contained" size="small">
              Portal Administrativo
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <Box
                component={LogoAsada}
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-25%)",
                  width: "20%",
                  objectFit: "contain",
                }}
              />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(!open)} sx={{ border: "1px solid black" }}>
              {open ? <CloseRoundedIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              hideBackdrop={true}
              slotProps={{
                paper: {
                  sx: {
                    top: "var(--template-frame-height, 100px)",
                    marginLeft: "5%",
                    marginRight: "8%",
                    border: "1px solid black",
                    borderRadius: "8px",
                    paddingTop: "20px"
                  }
                }
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <MenuItem onClick={() => handleNavigation('/noticias')}>Noticias</MenuItem>
                <MenuItem onClick={() => handleNavigation('/consulta-en-linea')}>
                Consulta tu recibo
                <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                  (abre en nueva pestaña)
                </Typography>
              </MenuItem>
                <MenuItem onClick={() => handleNavigation('/gestiones')}>Gestiones</MenuItem>
                <MenuItem onClick={() => handleNavigation('/gobernanza')}>Gobernanza </MenuItem>
                <MenuItem onClick={() => handleNavigation('/nuestra-historia')}>Nuestra historia</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="secondary" variant="contained" fullWidth>
                    Portal Administrativo
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
