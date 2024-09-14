import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
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
      
En DOXA, somos un equipo apasionado por transformar espacios. Nos dedicamos a la remodelación de pisos, baños, cocinas y mucho más, siempre trabajando en conjunto para hacer realidad las ideas de nuestros clientes. Ofrecemos un servicio integral, desde la asesoría hasta la ejecución, garantizando calidad, profesionalismo y precios justos en cada proyecto. Tu satisfacción es nuestra prioridad.
        </Text>
      </Flex>
      <Box gridColumn="4 / 7">
        <Image
          src="/about-us-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
        />
      </Box>
    </Grid>
  )
}

export default About
