import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import './Gestiones.scss';

const gestionesData = [
  {
    title: 'Solicitud de Nuevo Servicio',
    description: 'Solicita una nueva conexión de agua potable para tu domicilio o negocio.',
    icon: <WaterDropIcon />,
    requirements: [
      'Copia de cédula de identidad',
      'Prueba de propiedad o contrato de arrendamiento',
      'Croquis de ubicación del predio'
    ],
    buttonText: 'Solicitar Servicio'
  },
  {
    title: 'Pago de Servicios',
    description: 'Realiza el pago de tu recibo de agua de forma rápida y segura.',
    icon: <PaymentIcon />,
    requirements: [
      'Número de contrato',
      'Monto a pagar',
      'Método de pago preferido'
    ],
    buttonText: 'Pagar en Línea'
  },
  {
    title: 'Reporte de Incidentes',
    description: 'Reporta fugas, problemas de presión o cualquier incidencia en el servicio.',
    icon: <AssignmentIcon />,
    requirements: [
      'Descripción del problema',
      'Ubicación exacta',
      'Contacto telefónico'
    ],
    buttonText: 'Reportar Incidente'
  },
  {
    title: 'Solicitud de Facturas',
    description: 'Obtén copias de tus facturas anteriores o solicita facturas a domicilio.',
    icon: <ReceiptIcon />,
    requirements: [
      'Número de contrato',
      'Período solicitado',
      'Dirección de envío (si aplica)'
    ],
    buttonText: 'Solicitar Facturas'
  }
];

export default function Gestiones() {
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
        {gestionesData.map((gestion, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              className="gestion-card"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    color: "primary.main",
                  }}
                >
                  {gestion.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {gestion.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {gestion.description}
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{ p: 2, mb: 2, backgroundColor: "grey.50" }}
                >
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Requisitos:
                  </Typography>
                  <List dense>
                    {gestion.requirements.map((req, reqIndex) => (
                      <ListItem key={reqIndex} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "primary.main",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={req}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Button
                  variant="contained"
                  fullWidth
                  className="gestion-button"
                >
                  {gestion.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
