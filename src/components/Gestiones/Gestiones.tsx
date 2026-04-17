import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GenericCard from '../GenericCard/GenericCard';
import { DataService } from '../../services/dataService';
import './Gestiones.scss';

export default function Gestiones() {
  const gestionesData = DataService.getServiceData();

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
        {gestionesData.map((gestion: any) => (
          <Grid key={gestion.id} size={{ xs: 12, md: 3 }}>
            <GenericCard
              data={gestion}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
