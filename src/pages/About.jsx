import { Navbar } from '@/components/Navbar';
import { Container, Heading, Image, Text, Flex, Box } from '@chakra-ui/react';
import orbit from '@/assets/orbit.webp';
import star from '@/assets/star.webp';
import whiteHole from '@/assets/white-hole.webp';
import stellar from '@/assets/stellar.webp';
import orbital from '@/assets/orbital.webp';
import CircularText from '@/blocks/TextAnimations/CircularText/CircularText';
import CurvedLoop from '@/blocks/TextAnimations/CurvedLoop/CurvedLoop';

const About = () => {
  return (
    <Container
      as='section'
      id='home'
      minH='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      py={{ base: 16, md: 0 }}
      position='relative'
      overflow='hidden'
      maxW='100%'
      mt={{ base: 0, md: 16 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        maxW='1200px'
        mb={12}
        px={{ base: 4, md: 0 }}
      >
        <Box flex='1' order={{ base: 2, md: 1 }}>
          <Image
            src={orbit}
            alt='Orbit'
            w='100%'
            h='300px'
            objectFit='fill'
            borderRadius='2xl'
          />
        </Box>
        <Box
          flex='1'
          textAlign={{ base: 'center', md: 'right' }}
          pl={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
          order={{ base: 1, md: 2 }}
        >
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={4}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='major-mono-display-regular'
          >
            WHAT WE ARE BUILDING
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='work-sans-regular'
          >
            At Orbyte Studio, we're crafting the future of multimedia
            storytelling. Like celestial bodies that illuminate the cosmos, we
            create content that captures imagination and transforms ideas into
            stellar experiences. Our multimedia company specializes in film
            production, digital design, strategic campaigns, and immersive brand
            narratives that resonate across galaxies of audiences. We don't just
            produce content—we architect dreams and engineer inspiration.
          </Text>
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        maxW='1200px'
        mb={12}
        px={{ base: 4, md: 0 }}
      >
        <Box
          flex='1'
          textAlign={{ base: 'center', md: 'left' }}
          pr={{ base: 0, md: 8 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mb={4}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='major-mono-display-regular'
          >
            WHO WE ARE
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='work-sans-regular'
          >
            We are dreamers, creators, and cosmic architects united by a shared
            passion for multimedia excellence. Our constellation includes
            visionaries from diverse backgrounds—filmmakers, designers,
            strategists, and storytellers—all orbiting around the common goal of
            creating content that moves, inspires, and endures. Like the phases
            of the moon, we embrace constant evolution, always seeking new ways
            to illuminate the path forward for our team, clients, and the
            industry we serve.
          </Text>
        </Box>
        <Box flex='1'>
          <Image
            src={star}
            alt='Star'
            w='100%'
            h='300px'
            objectFit='fill'
            borderRadius='2xl'
          />
        </Box>
      </Flex>

      <CurvedLoop
        marqueeText='ORBYTE*MAKE*INNOVATIONS*'
        speed={1.8}
        curveAmount={0}
        direction='right'
        interactive={true}
        className='orbitron'
      />

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        maxW='1200px'
        px={{ base: 4, md: 0 }}
        mt={{ base: 4, md: 0 }}
      >
        <Box flex='1'>
          <Image
            src={whiteHole}
            alt='Orbit'
            w='100%'
            h='300px'
            objectFit='fill'
            borderRadius='2xl'
          />
        </Box>
      </Flex>

      <Box></Box>
    </Container>
  );
};

export default About;
