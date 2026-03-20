import React from 'react';
import GenericCard, { GenericCardData } from './GenericCard';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';

// Example usage data for different variants

// News card example (like Noticias)
export const newsCardExample: GenericCardData = {
  id: '1',
  title: 'Nueva planta de tratamiento inaugurada',
  description: 'La ASADA Suerre ha inaugurado una moderna planta de tratamiento que beneficiará a más de 500 familias en la comunidad.',
  image: '/path/to/news-image.jpg',
  tag: 'Infraestructura',
  authors: [
    { name: 'Juan Pérez', avatar: '/path/to/avatar1.jpg' },
    { name: 'María González', avatar: '/path/to/avatar2.jpg' }
  ]
};

// Service card example (like Gestiones)
export const serviceCardExample: GenericCardData = {
  id: '2',
  title: 'Solicitud de Nuevo Servicio',
  description: 'Solicita una nueva conexión de agua potable para tu domicilio o negocio.',
  metadata: {
    icon: <WaterDropIcon />
  },
  actions: [
    {
      label: 'Solicitar Servicio',
      onClick: () => console.log('Solicitando servicio...'),
      variant: 'contained'
    }
  ]
};

// Governance card example (like Gobernanza)
export const governanceCardExample: GenericCardData = {
  id: '3',
  title: 'Transparencia',
  description: 'Accede a toda la información sobre nuestra gestión financiera y administrativa.',
  metadata: {
    icon: <AssignmentIcon />
  },
  actions: [
    {
      label: 'Ver Informes',
      onClick: () => console.log('Ver informes...'),
      variant: 'outlined'
    }
  ]
};

// Contact card example (like Contactos)
export const contactCardExample: GenericCardData = {
  id: '4',
  title: 'Teléfono',
  subtitle: '2763 6703',
  description: 'Llámanos para cualquier consulta o emergencia.',
  metadata: {
    icon: <PhoneIcon />
  },
  actions: [
    {
      label: 'Llamar Ahora',
      onClick: () => window.open('tel:+50627636703', '_self'),
      variant: 'contained'
    }
  ]
};

// Example component showing all variants
export const GenericCardExamples: React.FC = () => {
  const [focusedCard, setFocusedCard] = React.useState<number | null>(null);

  const handleFocus = (index: number) => {
    setFocusedCard(index);
  };

  const handleBlur = () => {
    setFocusedCard(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>GenericCard Examples</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>News Variant</h3>
        <GenericCard
          data={newsCardExample}
          variant="news"
          focused={focusedCard === 1}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Service Variant</h3>
        <GenericCard
          data={serviceCardExample}
          variant="service"
          focused={focusedCard === 2}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Governance Variant</h3>
        <GenericCard
          data={governanceCardExample}
          variant="governance"
          focused={focusedCard === 3}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Contact Variant</h3>
        <GenericCard
          data={contactCardExample}
          variant="contact"
          focused={focusedCard === 4}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default GenericCardExamples;
