import React from 'react'
import { Box, Flex, Heading, Text, Grid } from '@chakra-ui/core'
import Button from './button'

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
      <Box gridColumn="4 / 7" display={['none', 'none', 'none', 'block', 'block']}>
        <Box
          position="relative"
          paddingTop="177%" // Para mantener la proporción de Shorts
        >
          <iframe
            src="https://www.youtube.com/embed/yYfPjWRPmm8"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
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
