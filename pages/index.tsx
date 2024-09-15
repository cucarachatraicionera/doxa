import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'
import Footer from '../components/footer'
import OurProject from '../components/our-projects'
import CreativeDirector from '../components/creative-director'
import { Divider } from '@chakra-ui/core'
import WhatsAppButton from '../components/whatssapp'; // Ajusta la ruta si es necesario


const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Service />
      <OurProject />
      <Divider mt="24" />
      <WhatsAppButton phoneNumber="34672260477" message="¡Hola! Tengo una consulta sobre sus servicios." />
      <Footer />
    </>
  )
}

export default Home
