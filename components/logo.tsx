import React from 'react'
import { Image, Flex } from '@chakra-ui/core'

const Logo: React.FC = () => {
  return (
    <Flex
      justify="flex-start"  // Alinea a la izquierda
      align="center"        // Centra verticalmente el contenido
      padding="10px"        // Añade un pequeño padding
    >
      <Image
        src="/logodoxa.png"   // Ruta de la imagen en la carpeta public
        alt="Logo de Doxa Remodelaciones"
        width={['50px', '75px', '100px']}  // Ajusta el tamaño en móviles, tablets y pantallas grandes
        height="auto"         // Mantiene la proporción de la imagen
        objectFit="contain"   // Asegura que la imagen no se distorsione
      />
    </Flex>
  )
}

export default Logo
