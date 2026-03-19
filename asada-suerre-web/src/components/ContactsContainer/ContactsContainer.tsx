import React from 'react';
import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactFloat from '../ContactFloat/ContactFloat';
import './ContactsContainer.scss';

interface ContactsContainerProps {
  whatsappPhoneNumber?: string;
  email?: string;
  facebookUrl?: string;
}

const ContactsContainer: React.FC<ContactsContainerProps> = ({
  whatsappPhoneNumber = '+50686290676',
  email = 'info@acueductosuerre.com',
  facebookUrl = 'https://es-la.facebook.com/acueductosuerre#'
}) => {
  return (
    <Box className="contacts-container">
      <Box className="contacts-wrapper">
        <ContactFloat
          icon={<WhatsAppIcon />}
          link={`https://wa.me/${whatsappPhoneNumber.replace(/[^\d]/g, '')}`}
          tooltipTitle="Contactar por WhatsApp"
          ariaLabel="Contactar por WhatsApp"
        />
        <ContactFloat
          icon={<EmailIcon />}
          link={`mailto:${email}?subject=Contacto desde página web&body=Hola, me gustaría obtener más información...`}
          tooltipTitle="Enviar correo electrónico"
          ariaLabel="Enviar correo electrónico"
        />
        <ContactFloat
          icon={<FacebookIcon />}
          link={facebookUrl}
          tooltipTitle="Visitar Facebook"
          ariaLabel="Visitar Facebook"
        />
      </Box>
    </Box>
  );
};

export default ContactsContainer;
