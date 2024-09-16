import React from 'react'
import { Grid, Text, Flex, Heading, Box } from '@chakra-ui/core'
import CompareImage from 'react-compare-image'

const Service: React.FC = () => {
  const BEFORE_IMAGE = '/before.jpeg';  // Cambia por la ruta correcta de la imagen antes
  const AFTER_IMAGE = '/after.jpeg';    // Cambia por la ruta correcta de la imagen después

  return (
    <Box position="relative" backgroundColor="orange.500" paddingBottom="50px"> {/* Ajustar padding inferior */}
      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
        maxW="1200px"  // Limita el ancho máximo de la sección
        margin="0 auto"  // Centra el contenido
        paddingX="16px"  // Añade un pequeño margen lateral
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          color="white"
          gridColumn={['1 / 13', '1 / 13', '1 / 13', '7 / 12', '7 / 12']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Nuestros Servicios Profesionales
          </Heading>
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="12px"  // Reducir el margen entre heading y texto
            alignSelf="flex-start"
          >
            Transformamos tus ideas en espacios únicos y funcionales.
          </Heading>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            En DOXA, ofrecemos una amplia gama de servicios profesionales para la remodelación de tu hogar o negocio. Nos especializamos en la renovación de pisos, baños, cocinas, y mucho más. Nuestro equipo maneja trabajos de fontanería, electricidad, aislamiento térmico, instalación de tela asfáltica, carpintería, y sistemas multicapa. Además, realizamos instalaciones de puertas, ventanas, mamparas, y terrazas. Cada proyecto es ejecutado con el más alto nivel de detalle y compromiso, garantizando soluciones personalizadas, ajustadas a tus necesidades y siempre con la mejor calidad y profesionalismo.
          </Text>
        </Flex>

        <Box
          gridColumn={['1 / 13', '1 / 13', '1 / 13', '1 / 6', '1 / 6']}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="20px"  // Espaciado entre el texto y el slider
        >
          {/* Componente del deslizador de Antes y Después */}
          <Box maxW="600px" width="100%">  {/* Limita el ancho del componente */}
            <CompareImage
              leftImage={BEFORE_IMAGE}   // Imagen del antes
              rightImage={AFTER_IMAGE}   // Imagen del después
              sliderPositionPercentage={0.5}  // Controla la posición inicial del slider
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Service
