import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'
import Footer from '../components/footer'
import OurProject from '../components/our-projects'
import CreativeDirector from '../components/creative-director'
import { Divider, Box, Button } from '@chakra-ui/core'
import WhatsAppButton from '../components/whatssapp' // Ajusta la ruta si es necesario

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />

      {/* Enlace al blog externo */}
      <Box textAlign="center" mt="24" mb="24">
        <a href="https://medium.com/@cryptomemecoingo" target="_blank" rel="noopener noreferrer">
          <Button
            bg="orange.500"      // Color de fondo
            color="white"        // Color del texto
            size="lg"            // Tamaño del botón
            _hover={{ bg: 'orange.600' }}  // Color de fondo al pasar el mouse
          >
            Visita nuestro Blog
          </Button>
        </a>
      </Box>

      <Service />
      <OurProject />
      <Divider mt="24" />
      <WhatsAppButton phoneNumber="34672260477" message="¡Hola! Tengo una consulta sobre sus servicios." />
      <Footer />
    </>
  )
}

export default Home
