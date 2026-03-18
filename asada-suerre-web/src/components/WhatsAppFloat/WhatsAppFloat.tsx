import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './WhatsAppFloat.scss';
 
interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}
 
const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ 
  phoneNumber = '+50686290676',
}) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };
 
  return (
    <Box className="whatsapp-float">
      <Tooltip title="Contactar por WhatsApp" placement="right">
        <IconButton
          className="whatsapp-button"
          onClick={handleClick}
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
 
export default WhatsAppFloat;