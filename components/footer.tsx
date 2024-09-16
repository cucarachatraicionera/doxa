import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { RiTiktokFill } from 'react-icons/ri'  // Importamos el ícono de TikTok desde Remix Icons

const Footer: React.FC = () => {
  return (
    <Grid as="footer" templateColumns="repeat(6, 1fr)" mt="16" mb="16">
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
      >
        <Logo />
        <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
          En DOXA, nos dedicamos a transformar tus espacios con profesionalismo y atención al detalle. Contáctanos para hacer realidad tus ideas a precios justos y con total confianza.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          <a href="https://www.facebook.com/share/bstZ8rgZi7YMMrn3/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <Box as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          </a>
          <a href="https://www.instagram.com/carlosduque.77?igsh=eTg5dXAwNmpzZm55&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          </a>
          <a href="https://www.youtube.com/@CarlosAndresDuque-w1n" target="_blank" rel="noopener noreferrer">
            <Box as={FaYoutube} size="22px" color="orange.500" mr="12px" />
          </a>
          <a href="https://www.tiktok.com/@carlosduque.77?_t=8pkLvF7s8cI&_r=1" target="_blank" rel="noopener noreferrer">
            <Box as={RiTiktokFill} size="22px" color="orange.500" />
          </a>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Contact Us
        </Text>
        <Text mb="6px">Address: Carrer del Valles 56 nave industrial</Text>
        <Text mb="6px">
          Phone:{' '}
          <a href="tel:+34672260477" style={{ color: 'orange.500' }}>
            +34 672260477
          </a>
        </Text>
        <Text>
          Email:{' '}
          <a
            href="mailto:carlosduque.77reformas@gmail.com"
            style={{ color: 'orange.500' }}
          >
            carlosduque.77reformas@gmail.com
          </a>
        </Text>
      </Flex>
    </Grid>
  )
}

export default Footer
