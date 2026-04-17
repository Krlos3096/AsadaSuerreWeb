import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GenericCard from '../GenericCard/GenericCard';
import gobernanzaData from '../../assets/gobernanza-data.json';
import './Gobernanza.scss';

export default function Gobernanza() {
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
        {gobernanzaData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 3 }}>
            <GenericCard
              data={item}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
