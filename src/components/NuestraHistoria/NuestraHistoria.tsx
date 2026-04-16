import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import './NuestraHistoria.scss';

const timelineData = [
  {
    year: '1995',
    title: 'Fundación',
    description: 'La ASADA Suerre fue fundada por un grupo de vecinos comprometidos con llevar agua potable a la comunidad.',
    icon: WaterDropIcon
  },
  {
    year: '1998',
    title: 'Primera Conexión',
    description: 'Se realizan las primeras 50 conexiones domiciliares, marcando el inicio del servicio formal.',
    icon: WaterDropIcon
  },
  {
    year: '2005',
    title: 'Expansión',
    description: 'Se amplía la red de distribución para cubrir 200 hogares adicionales en zonas aledañas.',
    icon: WaterDropIcon
  },
  {
    year: '2012',
    title: 'Modernización',
    description: 'Se implementan nuevos sistemas de tratamiento y purificación del agua.',
    icon: WaterDropIcon
  },
  {
    year: '2020',
    title: 'Digitalización',
    description: 'Se lanza el sistema de facturación en línea y portal web para mejorar el servicio.',
    icon: WaterDropIcon
  },
  {
    year: '2024',
    title: 'Sostenibilidad',
    description: 'Se implementan proyectos de energía solar y protección de fuentes de agua.',
    icon: WaterDropIcon
  }
];

const statsData = [
  { number: '2,500+', label: 'Usuarios Conectados' },
  { number: '29', label: 'Años de Servicio' },
  { number: '15', label: 'Kilómetros de Red' },
  { number: '99.5%', label: 'Calidad del Agua' }
];

export default function NuestraHistoria() {
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
      {/* Statistics Section */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {statsData.map((stat, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }}>
            <Card className="stat-card" sx={{ textAlign: "center", py: 3 }}>
              <CardContent>
                <Typography
                  variant="h3"
                  component="div"
                  className="stat-number"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="stat-label"
                >
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Timeline Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Hitos Importantes
        </Typography>
        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" className="timeline-dot">
                  <item.icon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper elevation={1} sx={{ p: 2, backgroundColor: "grey.50" }}>
                  <Typography
                    variant="caption"
                    color="primary"
                    sx={{ fontWeight: "bold", display: "block", mb: 1 }}
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>

      {/* Mission and Vision */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="mission-card" sx={{ height: "100%" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "primary.main", textAlign: "center" }}
              >
                Misión
              </Typography>
              <Typography variant="body1" paragraph>
                Proporcionar agua potable de calidad a todos los habitantes de
                la comunidad de Suerre, garantizando un servicio eficiente,
                sostenible y a precios accesibles, contribuyendo al mejoramiento
                de la calidad de vida de nuestros usuarios.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="vision-card" sx={{ height: "100%" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "primary.main", textAlign: "center" }}
              >
                Visión
              </Typography>
              <Typography variant="body1" paragraph>
                Ser una ASADA modelo en la gestión sostenible del recurso
                hídrico, reconocida por su excelencia en el servicio, su
                compromiso con el medio ambiente y su contribución al desarrollo
                comunitario.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
