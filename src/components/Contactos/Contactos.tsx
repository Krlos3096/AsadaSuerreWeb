import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GenericCard from '../GenericCard/GenericCard';
import { GenericCardData } from '../GenericCard/GenericCard';
import './Contactos.scss';

export default function Contactos() {
  // Contact information
  const phoneNumber = '2763 6703';
  const email = 'info@acueductosuerre.com';
  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.960393733241!2d-83.75424572520377!3d10.183871889931112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0c9a634f71367%3A0x82f0f8420a53f9c1!2sAcueducto%20Rural%20Suerre!5e0!3m2!1ses!2scr!4v1773988279617!5m2!1ses!2scr';

  const handlePhoneCall = () => {
    window.open(`tel:+506${phoneNumber.replace(/\s/g, '')}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}?subject=Contacto desde página web&body=Hola, me gustaría obtener más información...`, '_self');
  };

  // Transform contact data to GenericCard format
  const contactCards: GenericCardData[] = [
    {
      id: 'phone',
      title: phoneNumber,
      subtitle: '',
      description: 'Llámanos para cualquier consulta o emergencia.',
      metadata: {
        icon: <PhoneIcon />
      },
      actions: [
        {
          label: 'Llamar Ahora',
          onClick: handlePhoneCall,
          variant: 'contained'
        }
      ]
    },
    {
      id: 'email',
      title: email,
      subtitle: '',
      description: 'Envíanos un correo electrónico para mayor información.',
      metadata: {
        icon: <EmailIcon />
      },
      actions: [
        {
          label: 'Enviar Correo',
          onClick: handleEmailClick,
          variant: 'contained'
        }
      ]
    }
  ];

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
      <Grid container spacing={4}>
        <Grid key="ubicacion" size={{ xs: 12, md: 6, lg: 4 }}>
          {/* Map Section */}
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "grey.50",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "white",
              }}
            >
              <iframe
                src={mapsEmbedUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "8px",
                }}
                title="Ubicación de Acueducto Rural Suerre"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: "center", display: "block", mt: 2 }}
            >
              Visítanos en nuestra ubicación en Suerre, Jiménez, Pococí, Limón
            </Typography>
          </Paper>
        </Grid>
        {contactCards.map((contact) => (
          <Grid key={contact.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <GenericCard data={contact} variant="contact" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
