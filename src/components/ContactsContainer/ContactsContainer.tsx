import React from 'react';
import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import BuildIcon from '@mui/icons-material/BuildCircle';
import ContactFloat from '../ContactFloat/ContactFloat';
import './ContactsContainer.scss';

interface ContactsContainerProps {
  whatsappPhoneInfo?: string;
  whatsappPhoneSupport?: string;
  facebookUrl?: string;
}

const ContactsContainer: React.FC<ContactsContainerProps> = ({
  whatsappPhoneInfo = '+50685676443',
  whatsappPhoneSupport = '+50684479692',
  facebookUrl = 'https://es-la.facebook.com/acueductosuerre#'
}) => {
  return (
    <Box className="contacts-container">
      <Box className="contacts-wrapper">
        <ContactFloat
          icon={<WhatsAppIcon />}
          link={`https://wa.me/${whatsappPhoneInfo.replace(/[^\d]/g, '')}`}
          tooltipTitle="WhatsApp Averias"
          ariaLabel="WhatsApp Averias"
        />
        <ContactFloat
          icon={<BuildIcon />}
          link={`https://wa.me/${whatsappPhoneSupport.replace(/[^\d]/g, '')}`}
          tooltipTitle="WhatsApp Gestiones"
          ariaLabel="WhatsApp Gestiones"
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
