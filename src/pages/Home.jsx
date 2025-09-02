import LightRays from '@/blocks/Backgrounds/LightRays/LightRays';
import { Box, Container, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <Container
      as='section'
      id='home'
      minH='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      py={{ base: 16, md: 0 }}
      position='relative'
      overflow='hidden'
      maxW='100%'
    >
      {/* Light Ray Background */}
      <Box position='absolute' top={0} left={0} right={0} bottom={0}>
        <LightRays
          raysOrigin='top-center'
          raysColor='#00ffff'
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className='custom-rays'
        />
      </Box>

      {/* Navbar */}
      <Flex
        justifyContent='space-between'
        alignItems='center'
        px={10}
        py={10}
        position='absolute'
        top={0}
        left={0}
        right={0}
        zIndex={2}
      >
        {/* Logo and Copyright //TODO: Add logo here */}
        <Box
          fontSize={{ base: 'xs', md: 'sm' }}
          color='white'
          textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
          fontWeight='bold'
        >
          &copy; 2025 Stellar Luna Co.
        </Box>

        {/* Social Icons */}
        <Box display='flex' gap={2}>
          <IconButton
            variant='ghost'
            aria-label='GitHub'
            color='white'
            borderRadius='full'
            _hover={{ bg: 'white', color: 'black' }}
          >
            <FaGithub />
          </IconButton>
          <IconButton
            variant='ghost'
            aria-label='Facebook'
            color='white'
            borderRadius='full'
            _hover={{ bg: 'white', color: 'black' }}
          >
            <FaFacebook />
          </IconButton>
        </Box>
      </Flex>

      {/* Content */}
      <Box
        position='relative'
        zIndex={1}
        textAlign='center'
        px={{ base: 4, md: 0 }}
      >
        <Box
          as='h1'
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight='bold'
          mb={4}
          color='white'
          textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
          className='michroma-regular'
        >
          Stellar Luna Multimedia
        </Box>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mb={8}
          color='white'
          textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
          fontStyle='italic'
        >
          Creativity in Motion | Where Imagination Orbits Reality
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
