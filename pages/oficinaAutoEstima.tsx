import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';


import {
  Button,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  HStack,
  VStack,
  Text,
  useBreakpointValue,
  AspectRatio,
} from '@chakra-ui/react';


export const getStaticProps: GetStaticProps = async () => ({
  props: {
    isPublic: true
  },
});

const OficinaAutoEstima = () => {
  return (
    <Stack bgColor={'pink.300'}  align={'center'} justify={'center'} >
      <VStack mt={5}  w={'80%'} direction={{ base: 'column', md: 'row' }}>
      <Image
        borderRadius='full'
        boxSize='150px'
        boxShadow='2xl'
        src='insta.jpeg'
        alt='Dan Abramov'
      /> 
      <Heading  paddingTop={3} as='h3' size='md' color={'pink.700'} paddingBottom={1}>
            Paloma Freitas
      </Heading>
        <Heading  as='h3' size='lg' color={'pink.800'} paddingBottom={2}>
            Construindo a Auto Estima do seu filho
        </Heading>
        <Box   maxW={'99%'} borderRadius={2} boxShadow='lg'  rounded='xl' bg='white'>
          <iframe  scrolling='yes' src='https://docs.google.com/forms/d/e/1FAIpQLSf8EyBflCbn3NS_dZDmWuH110eRTUEA_rStlLbys8Ye6kSiww/viewform' width='760' height='2345' frameBorder='0'  >Loading…</iframe>
        </Box> 
      </VStack>
    </Stack>
  );
};

export default OficinaAutoEstima;