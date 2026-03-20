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
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import './Gobernanza.scss';

const gobernanzaData = [
  {
    title: 'Junta Directiva',
    description: 'Conoce a los miembros de nuestra junta directiva y su compromiso con la comunidad.',
    icon: <GroupsIcon />,
    items: [
      'Presidente: Juan Pérez',
      'Vicepresidente: María González',
      'Secretario: Carlos Rodríguez',
      'Tesorero: Ana Martínez'
    ],
    buttonText: 'Ver Junta Directiva'
  },
  {
    title: 'Reglamentos',
    description: 'Consulta nuestros reglamentos internos y normativas que rigen el funcionamiento de la ASADA.',
    icon: <GavelIcon />,
    items: [
      'Reglamento Interno',
      'Reglamento de Servicios',
      'Políticas de Calidad',
      'Normativas Ambientales'
    ],
    buttonText: 'Ver Reglamentos'
  },
  {
    title: 'Informes Financieros',
    description: 'Accede a nuestros informes financieros y transparencia en el uso de recursos.',
    icon: <AccountBalanceIcon />,
    items: [
      'Balance Anual',
      'Informe de Auditoría',
      'Presupuesto Anual',
      'Estado de Cuentas'
    ],
    buttonText: 'Ver Informes'
  },
  {
    title: 'Actas de Asambleas',
    description: 'Consulta las actas de nuestras asambleas generales y reuniones importantes.',
    icon: <DescriptionIcon />,
    items: [
      'Asamblea General 2024',
      'Asamblea Extraordinaria',
      'Reuniones de Junta',
      'Acuerdos Importantes'
    ],
    buttonText: 'Ver Actas'
  }
];

export default function Gobernanza() {
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
        {gobernanzaData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              className="gobernanza-card"
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
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{ p: 2, mb: 2, backgroundColor: "grey.50" }}
                >
                  <List dense>
                    {item.items.map((listItem, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ px: 0, py: 0.5 }}>
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
                          primary={listItem}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Button
                  variant="outlined"
                  fullWidth
                  className="gobernanza-button"
                >
                  {item.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
