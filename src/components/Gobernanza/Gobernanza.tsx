import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GenericCard from '../GenericCard/GenericCard';
import { DataService } from '../../services/dataService';
import './Gobernanza.scss';

export default function Gobernanza() {
  const [gobernanzaData, setGobernanzaData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const data = await DataService.getGovernanceData();
        setGobernanzaData(data);
      } catch (error) {
        console.error('Failed to load gobernanza:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <Box sx={{ textAlign: 'center', py: 8 }}>Loading...</Box>;
  }

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
        {gobernanzaData.map((item: any, index: number) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <GenericCard
              data={item}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
