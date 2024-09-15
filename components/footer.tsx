import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

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
          <Box as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          <Box as={FaTwitter} size="22px" color="orange.500" mr="12px" />
          <Box as={FaGoogle} size="22px" color="orange.500" mr="12px" />
          <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          <Box as={FaYoutube} size="22px" color="orange.500" />
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
        <Text mb="6px">Phone: +34 672260477</Text>
        <Text>Email: carlosduque.77reformas@gmail.com</Text>
      </Flex>

      
    </Grid>
  )
}

export default Footer
