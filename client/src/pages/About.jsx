import {
  Container,
  Heading,
  Image,
  Text,
  Flex,
  Box,
  Separator,
  Highlight,
} from '@chakra-ui/react';
import orbit from '@/assets/orbit.webp';
import star from '@/assets/star.webp';
import whiteHole from '@/assets/white-hole.webp';
import stellar from '@/assets/stellar.webp';
import orbital from '@/assets/orbital.webp';
import CurvedLoop from '@/blocks/TextAnimations/CurvedLoop/CurvedLoop';
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const whiteHoleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    // WhiteHole image animation
    const whiteHoleImage = whiteHoleRef.current;
    gsap.fromTo(
      whiteHoleImage,
      { width: '50%' }, // Initial width
      {
        width: '100%', // Final width as it becomes visible
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whiteHoleImage,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Mission section animation
    const missionSection = missionRef.current;
    gsap.fromTo(
      missionSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionSection,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Vision section animation
    const visionSection = visionRef.current;
    gsap.fromTo(
      visionSection,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: visionSection,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container
      as='section'
      id='about'
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
      mb={{ base: 0, md: 32 }}
    >
      <AnimatedContent
        distance={100}
        direction='horizontal'
        reverse={false}
        duration={0.8}
        ease='power3.out'
        animateOpacity
        scale={1}
        threshold={0.1}
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
              r
              borderRadius='2xl'
            />
          </Box>
          <Box
            flex='1'
            textAlign='justify'
            pl={{ base: 0, md: 8 }}
            mb={{ base: 4, md: 0 }}
            order={{ base: 1, md: 2 }}
          >
            <Heading
              fontSize='4xl'
              mb={4}
              color='white'
              textAlign={{ base: 'center', md: 'right' }}
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              className='bebas-neue-regular'
            >
              WHAT ARE WE{' '}
              <span style={{ color: '#a0a0ff' }} className='bebas-neue-regular'>
                BUILDING
              </span>
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='white'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              className='work-sans-regular'
            >
              <Highlight
                query={['crafting the future of multimedia', 'storytelling']}
                styles={{
                  bg: '#a0a0ff', // bright lavender background
                  color: 'black', // dark text stands out more
                  px: 1,
                  borderRadius: 'md',
                }}
              >
                At Orbyte Studio, we're crafting the future of multimedia
                storytelling. Like celestial bodies that illuminate the cosmos,
                we create content that captures imagination and transforms ideas
                into stellar experiences. Our multimedia company specializes in
                film production, digital design, strategic campaigns, and
                immersive brand narratives that resonate across galaxies of
                audiences. We don't just produce content—we architect dreams and
                engineer inspiration.
              </Highlight>
            </Text>
          </Box>
        </Flex>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction='horizontal'
        reverse={true}
        duration={0.8}
        ease='power3.out'
        animateOpacity
        scale={1}
        threshold={0.1}
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
          <Box
            flex='1'
            textAlign='justify'
            pr={{ base: 0, md: 8 }}
            mb={{ base: 4, md: 0 }}
          >
            <Heading
              fontSize='4xl'
              mb={4}
              color='white'
              textAlign={{ base: 'center', md: 'left' }}
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              className='bebas-neue-regular'
            >
              WHO WE{' '}
              <span style={{ color: '#a0a0ff' }} className='bebas-neue-regular'>
                ARE
              </span>
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='white'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              className='work-sans-regular'
            >
              <Highlight
                query={[
                  'dreamers',
                  'creators',
                  'cosmic architects',
                  'filmmakers',
                  'designers',
                  'strategists',
                  'storytellers',
                ]}
                styles={{
                  bg: '#a0a0ff', // bright lavender background
                  color: 'black', // dark text stands out more
                  px: 1,
                  borderRadius: 'md',
                }}
              >
                We are dreamers, creators, and cosmic architects united by a
                shared passion for multimedia excellence. Our constellation
                includes visionaries from diverse backgrounds—filmmakers,
                designers, strategists, and storytellers—all orbiting around the
                common goal of creating content that moves, inspires, and
                endures. Like the phases of the moon, we embrace constant
                evolution, always seeking new ways to illuminate the path
                forward for our team, clients, and the industry we serve.
              </Highlight>
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
      </AnimatedContent>

      <CurvedLoop
        marqueeText='✦ORBYTE✦MAKE✦INNOVATIONS✦'
        speed={1.8}
        curveAmount={0}
        direction='right'
        interactive={true}
        className='anton-sc-regular curved-loop'
      />

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='center'
        w='100%'
        maxW='1200px'
        mt={{ base: 4, md: 0 }}
        mb={{ base: 12, md: 24 }}
      >
        <Box flex='1' display='flex' justifyContent='center'>
          <Image
            id='whiteHole'
            ref={whiteHoleRef}
            src={whiteHole}
            alt='Orbit'
            h='300px'
            objectFit='fill'
            borderRadius='2xl'
          />
        </Box>
      </Flex>

      <Box ref={missionRef} w='100%' maxW='1200px' mb={12}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='space-between'
          px={{ base: 4, md: 0 }}
        >
          <Box
            flex='1'
            display='flex'
            justifyContent='center'
            mt={{ base: 4, md: 0 }}
            order={{ base: 2, md: 1 }}
          >
            <Image
              src={stellar}
              alt='Stellar'
              w={{ base: '100%', md: '80%' }}
              h='300px'
              objectFit='fill'
              borderRadius='2xl'
            />
          </Box>
          <Box
            flex='1'
            textAlign='center'
            pl={{ base: 0, md: 8 }}
            order={{ base: 1, md: 2 }}
          >
            <Heading
              fontSize={{ base: '5xl', md: '6xl' }}
              mb={{ base: 8, md: 12 }}
              className='bebas-neue-regular'
              color='white'
              textAlign='center'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            >
              Our{' '}
              <Text
                as='span'
                color='#a0a0ff'
                textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
                bg='rgba(50, 50, 100, 0.6)' // deep cosmic navy with transparency
                px={2}
                borderRadius='xl'
              >
                Mission
              </Text>
            </Heading>
            <Separator borderWidth='2px' w='100%' mb={4} />
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='white'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              className='work-sans-regular'
              textAlign='justify'
            >
              <Highlight
                query={[
                  'push the boundaries of creative expression',
                  'visionary storytelling',
                  'cutting-edge technology',
                  'authentic human connection',
                ]}
                styles={{
                  bg: '#a0a0ff', // bright lavender background
                  color: 'black', // dark text stands out more
                  px: 1,
                  borderRadius: 'md',
                }}
              >
                We exist to push the boundaries of creative expression,
                transforming ordinary concepts into extraordinary multimedia
                experiences. Our mission is to be the gravitational force that
                pulls together visionary storytelling, cutting-edge technology,
                and authentic human connection. Every project we undertake is
                guided by our commitment to excellence, innovation, and the
                belief that great stories have the power to shift perspectives
                and illuminate new possibilities.
              </Highlight>
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box ref={visionRef} w='100%' maxW='1200px' mt={4}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='space-between'
          px={{ base: 4, md: 0 }}
          mb={{ base: 0, md: 36 }}
        >
          <Box
            flex='1'
            textAlign='center'
            pr={{ base: 0, md: 8 }}
            order={{ base: 1, md: 2 }}
            mb={{ base: 4, md: 0 }}
          >
            <Heading
              fontSize={{ base: '5xl', md: '6xl' }}
              mb={{ base: 8, md: 12 }}
              className='bebas-neue-regular'
              color='white'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            >
              Our{' '}
              <Text
                as='span'
                color='#a0a0ff'
                textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
                bg='rgba(50, 50, 100, 0.6)' // deep cosmic navy with transparency
                px={2}
                borderRadius='xl'
              >
                Vision
              </Text>
            </Heading>
            <Separator borderWidth='2px' w='100%' mb={4} />
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='white'
              textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
              className='work-sans-regular'
              textAlign='justify'
            >
              <Highlight
                query={[
                  'brightest star in the multimedia constellation',
                  'Launchpad for developing talent',
                ]}
                styles={{
                  bg: '#a0a0ff', // bright lavender background
                  color: 'black', // dark text stands out more
                  px: 1,
                  borderRadius: 'md',
                }}
              >
                Become the brightest star in the multimedia constellation.
                recognized globally for our ability to transform creative
                visions reality. We see a future in which Orbyte Studio serves
                as Launchpad for developing talent, reliable partner for
                forward-thinking brands are a beacon of innovation in the ever-
                The world of digital content development is becoming
                increasingly diverse.
              </Highlight>
            </Text>
          </Box>
          <Box
            flex='1'
            display='flex'
            justifyContent='center'
            order={{ base: 1, md: 2 }}
          >
            <Image
              src={orbital}
              alt='Orbital'
              w={{ base: '100%', md: '80%' }}
              h='300px'
              objectFit='fill'
              borderRadius='2xl'
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
