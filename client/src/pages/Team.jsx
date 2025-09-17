import ChromaGrid from '@/blocks/Components/ChromaGrid/ChromaGrid';
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CelestialTeam } from '@/constants/CelestialTeam';
import { StellarTeam } from '@/constants/StellarTeam';
import { LunarTeam } from '@/constants/LunarTeam';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const joinUsRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Default animation for larger screens (laptop, desktop)
    mm.add('(min-width: 768px)', () => {
      gsap.fromTo(
        joinUsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: joinUsRef.current,
            start: 'top 85%', // Start when the top of the element is 85% from the top of the viewport
            end: 'top 35%', // End when the top of the element is 35% from the top
            scrub: 0.5, // Smooth scrubbing
            toggleActions: 'restart pause reverse pause',
          },
        }
      );
    });

    // Animation for mobile screens
    mm.add('(max-width: 767px)', () => {
      gsap.fromTo(
        joinUsRef.current,
        { opacity: 0, y: 30 }, // Reduced y offset for mobile
        {
          opacity: 1,
          y: 0,
          duration: 0.8, // Slightly faster for mobile
          ease: 'power3.out',
          scrollTrigger: {
            trigger: joinUsRef.current,
            start: 'top 100%', // Adjusted for mobile viewport
            end: 'top 50%', // Adjusted for mobile viewport
            scrub: 0.3, // Faster scrub for mobile
            toggleActions: 'restart pause reverse pause',
          },
        }
      );
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container
      as='section'
      id='team'
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
      mb={{ base: 32, md: 72 }}
    >
      {/* Header */}
      <AnimatedContent
        distance={100}
        direction='vertical'
        reverse={false}
        duration={0.8}
        ease='power3.out'
        animateOpacity
        scale={1}
        threshold={0.1}
      >
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent={{ base: 'center', md: 'space-between' }}
          gap={{ base: 2, md: 4 }}
        >
          <Heading
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight='bold'
            color='white'
            textAlign={{ base: 'center', md: 'left' }}
            className='bebas-neue-regular'
          >
            MEET THE TEAM
          </Heading>
          <Heading
            fontSize={{ base: '2xl', md: '6xl' }}
            color='white'
            className='bebas-neue-regular'
            textAlign='center'
            maxW={{ base: '100%', md: '60%' }}
            lineHeight={1}
            mb={{ base: 2, md: 4 }}
          >
            We believe that the most brilliant stars shine brightest when
            they're part of a constellation.
          </Heading>
        </Flex>
      </AnimatedContent>

      {/* BSIT Team */}
      <Box mb={{ base: 8, md: 8 }} mt={{ base: 8, md: 8 }}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <Heading
            fontSize={{ base: '3xl', md: '6xl' }}
            mb={{ base: 8, md: 12 }}
            className='bebas-neue-regular'
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            textAlign='center'
          >
            Celestial{' '}
            <Text
              as='span'
              color='#a0a0ff'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              bg='rgba(50, 50, 100, 0.6)' // deep cosmic navy with transparency
              px={2}
              py={1}
              borderRadius='xl'
            >
              Innovators
            </Text>
          </Heading>

          <ChromaGrid
            items={CelestialTeam}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      {/* BSA Team */}
      <Box mb={{ base: 8, md: 8 }} mt={{ base: 0, md: 8 }}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <Heading
            fontSize={{ base: '3xl', md: '6xl' }}
            mb={{ base: 8, md: 12 }}
            className='bebas-neue-regular'
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            textAlign='center'
          >
            Lunar{' '}
            <Text
              as='span'
              color='#a0a0ff'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              bg='rgba(50, 50, 100, 0.6)' // deep cosmic navy with transparency
              px={2}
              py={1}
              borderRadius='xl'
            >
              Guardians
            </Text>
          </Heading>

          <ChromaGrid
            items={LunarTeam}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      {/* BSENTREP Team */}
      <Box mb={{ base: 8, md: 8 }} mt={{ base: 0, md: 8 }}>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <Heading
            fontSize={{ base: '3xl', md: '6xl' }}
            mb={{ base: 8, md: 12 }}
            className='bebas-neue-regular'
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            textAlign='center'
          >
            Stellar{' '}
            <Text
              as='span'
              color='#a0a0ff'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              bg='rgba(50, 50, 100, 0.6)' // deep cosmic navy with transparency
              px={2}
              py={1}
              borderRadius='xl'
            >
              Navigators
            </Text>
          </Heading>

          <ChromaGrid
            items={StellarTeam}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      {/* Join CTA */}
      <Flex
        ref={joinUsRef}
        flexDirection='column'
        alignItems='center'
        justifyContent={{ base: 'center', md: 'space-between' }}
        gap={{ base: 2, md: 4 }}
        borderRadius='xl'
        border='1px solid'
        borderColor='gray.700'
        p={{ base: 4, md: 8 }}
        bgClip='padding-box'
        mb={{ base: 0, md: 8 }}
      >
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight='bold'
          color='white'
          textAlign={{ base: 'center', md: 'left' }}
          className='major-mono-display-regular'
        >
          join our team
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '6xl' }}
          color='white'
          className='bebas-neue-regular'
          textAlign='center'
          maxW={{ base: '100%', md: '60%' }}
          lineHeight={1}
        >
          Let's make something extraordinary together.
        </Text>
        <Button
          as={RouterLink}
          to='/contact'
          variant='outline'
          color='white'
          size='lg'
          fontWeight='medium'
          fontSize={{ base: 'xs', md: 'sm' }}
          borderRadius='lg'
          borderColor='gray.700'
          _hover={{
            bg: 'white',
            color: 'black',
          }}
        >
          Contact Us
        </Button>
      </Flex>
    </Container>
  );
};

export default Team;
