import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import GenericCard from '../GenericCard/GenericCard';
import { GenericCardData } from '../GenericCard/GenericCard';
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
  // Transform gobernanza data to GenericCard format
  const transformedGobernanza: GenericCardData[] = gobernanzaData.map((item, index) => ({
    id: index.toString(),
    title: item.title,
    description: item.description,
    metadata: {
      icon: item.icon,
      requirements: item.items
    },
    actions: [
      {
        label: item.buttonText,
        onClick: () => console.log(`${item.buttonText} clicked`),
        variant: 'outlined'
      }
    ]
  }));

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
        {transformedGobernanza.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6 }}>
            <GenericCard
              data={item}
              variant="governance"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
