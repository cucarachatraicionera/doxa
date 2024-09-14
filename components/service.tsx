import React from 'react'
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

const Service: React.FC = () => {
  return (
    <Box position="relative">
      <Image
        width={['0%', '0%', '0%', '40%', '60%']}
        maxW="660px"
        position="absolute"
        top="40%"
        left="5%"
        src="/service-bg.png"
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />
      <Grid
        backgroundColor="orange.500"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
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
            Our Professional Services
          </Heading>
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
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
      </Grid>
    </Box>
  )
}

export default Service
