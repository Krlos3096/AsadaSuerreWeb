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
import usData from '../../assets/us-data.json';
import timelineData from '../../assets/time-items-data.json';
import { iconMap } from '../GenericCard/GenericCard';
import './NuestraHistoria.scss';

const statsData = usData.statsData;
const mission = usData.mission;
const vision = usData.vision;

// Hook for number animation
const useNumberAnimation = (end: string | number, duration: number = 1000) => {
  const [count, setCount] = React.useState(0);

  // Extract numeric value from string like "2,500+" or "99.5%"
  const parseEndValue = (value: string | number): number => {
    if (typeof value === 'number') return value;
    const parsed = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  // Format the number back to the original format
  const formatNumber = (value: number, original: string | number): string => {
    if (typeof original === 'number') return value.toString();
    const hasPercent = original.toString().includes('%');
    const hasPlus = original.toString().includes('+');
    
    let formatted = value.toLocaleString('en-US', { maximumFractionDigits: 1 });
    if (hasPercent) formatted += '%';
    if (hasPlus) formatted += '+';
    return formatted;
  };

  const endValue = parseEndValue(end);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = endValue * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration]);

  return formatNumber(count, end);
};

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
        {statsData.map((stat, index) => {
          const animatedNumber = useNumberAnimation(stat.number);
          return (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <Card className="stat-card" sx={{ textAlign: "center", py: 3 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="div"
                    className="stat-number"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    {animatedNumber}
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
          );
        })}
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
          {timelineData.map((item: any, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" className="timeline-dot">
                  {item.icon && iconMap[item.icon] || <WaterDropIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper elevation={1} sx={{ p: 2, backgroundColor: "grey.50" }}>
                  {item.image && (
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: 1,
                        mb: 2
                      }}
                    />
                  )}
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
                {mission.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {mission.content}
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
                {vision.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {vision.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
