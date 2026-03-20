import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import './Contactos.scss';

export default function Contactos() {
  const phoneNumber = '2763 6703';
  const email = 'info@acueductosuerre.com';
  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.960393733241!2d-83.75424572520377!3d10.183871889931112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0c9a634f71367%3A0x82f0f8420a53f9c1!2sAcueducto%20Rural%20Suerre!5e0!3m2!1ses!2scr!4v1773988279617!5m2!1ses!2scr';

  const handlePhoneCall = () => {
    window.open(`tel:+506${phoneNumber.replace(/\s/g, '')}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}?subject=Contacto desde página web&body=Hola, me gustaría obtener más información...`, '_self');
  };

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
      <Grid container spacing={4}>
        {/* Contact Information Cards */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card 
            className="contact-card"
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 2,
                color: 'primary.main'
              }}>
                <PhoneIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Teléfono
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                {phoneNumber}
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<PhoneIcon />}
                onClick={handlePhoneCall}
                fullWidth
                sx={{ mt: 'auto' }}
              >
                Llamar Ahora
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card 
            className="contact-card"
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 2,
                color: 'primary.main'
              }}>
                <EmailIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Correo Electrónico
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                {email}
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<EmailIcon />}
                onClick={handleEmailClick}
                fullWidth
                sx={{ mt: 'auto' }}
              >
                Enviar Correo
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          backgroundColor: 'grey.50',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'primary.main' }}>
          Encuéntrenos en el Mapa
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '450px',
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'white'
          }}
        >
          <iframe
            src={mapsEmbedUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px'
            }}
            title="Ubicación de Acueducto Rural Suerre"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block', mt: 2 }}>
          Visítanos en nuestra ubicación en Suerre, Guácimo, Limón
        </Typography>
      </Paper>
    </Container>
  );
}
