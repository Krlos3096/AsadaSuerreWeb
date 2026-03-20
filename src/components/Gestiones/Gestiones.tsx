import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import GenericCard from '../GenericCard/GenericCard';
import { GenericCardData } from '../GenericCard/GenericCard';
import './Gestiones.scss';

const gestionesData = [
  {
    title: 'Consulta de Recibos',
    description: 'Consulta tus recibos de pago y estado de cuenta.',
    icon: <AssignmentIcon />,
    requirements: [
      'Número de abonado',
      'Número de teléfono'
    ],
    buttonText: 'Consultar Recibos'
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
  // Transform gestiones data to GenericCard format
  const transformedGestiones: GenericCardData[] = gestionesData.map((gestion, index) => ({
    id: index.toString(),
    title: gestion.title,
    description: gestion.description,
    metadata: {
      icon: gestion.icon,
      requirements: gestion.requirements
    },
    actions: [
      {
        label: gestion.buttonText,
        onClick: () => {
          if (gestion.title === 'Consulta de Recibos') {
            window.open('https://www.cisaweb.com/mclientes', '_blank');
          } else {
            console.log(`${gestion.buttonText} clicked`);
          }
        },
        variant: 'contained'
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
        {transformedGestiones.map((gestion) => (
          <Grid key={gestion.id} size={{ xs: 12, md: 6 }}>
            <GenericCard
              data={gestion}
              variant="service"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
