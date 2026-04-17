import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GenericCard from '../GenericCard/GenericCard';
import { DataService } from '../../services/dataService';
import './Contactos.scss';

export default function Contactos() {
  const contactosData = DataService.getContactData();

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
        {contactosData.map((contact: any) => (
          <Grid key={contact.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <GenericCard data={contact} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
