import React from 'react'
import { Box, Flex, Heading, Text, Grid } from '@chakra-ui/core'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          Sobre Nosotros
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
          En DOXA somos un equipo apasionado por transformar espacios. Ofrecemos un servicio integral, desde la asesoría hasta la ejecución, garantizando calidad, profesionalidad y precios justos en cada proyecto.
          Su satisfacción es nuestra prioridad.      
        </Text>
      </Flex>
      <Box
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 7', '4 / 7']} // En móviles, colocamos el video abajo
        display={['block', 'block', 'block', 'block', 'block']}
        marginTop={['20px', '20px', '20px', '0', '0']} // Espacio adicional en móviles
      >
        <Box
          position="relative"
          width="100%"
          maxWidth={['100%', '100%', '360px']} // Ajuste del tamaño según la pantalla
          margin="0 auto" // Centrado del video
        >
          <iframe
            src="https://www.youtube.com/embed/yYfPjWRPmm8"
            style={{
              width: '100%',
              height: '640px',
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Short"
          ></iframe>
        </Box>
      </Box>
    </Grid>
  )
}

export default About
