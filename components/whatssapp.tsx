import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '¡Hola! Estoy interesado en sus servicios.',
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px', // Ahora está en la parte inferior derecha
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        textDecoration: 'none',
        zIndex: 1000, // para asegurarse de que esté por encima de otros elementos
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png" // Icono de WhatsApp desde CDN
        alt="WhatsApp"
        style={{ width: '35px', height: '35px' }}
      />
    </a>
  );
};

export default WhatsAppButton;
