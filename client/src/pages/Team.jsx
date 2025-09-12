import ChromaGrid from '@/blocks/Components/ChromaGrid/ChromaGrid';
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import delapeña from '@/assets/dela-peña.webp';
import florida from '@/assets/florida.webp';
import mariano from '@/assets/mariano.webp';
import masculino from '@/assets/masculino.webp';
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
            toggleActions: 'play none none reverse',
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
            start: 'top 90%', // Adjusted for mobile viewport
            end: 'top 50%', // Adjusted for mobile viewport
            scrub: 0.3, // Faster scrub for mobile
            toggleActions: 'play none none reverse',
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

  const orbyteTeam = [
    {
      image: florida,
      title: 'Rj Jack A. Florida',
      subtitle: 'Chief Executive Officer',
      social: [
        {
          icon: <FaGithub />,
          link: 'https://github.com/Rjjackflorida',
          label: 'Github',
        },
        {
          icon: <IoMail />,
          link: 'mailto:rjjackflorida7@gmail.com',
          label: 'Email',
        },
        {
          icon: <FaFacebook />,
          link: 'https://www.facebook.com/sh.izu.355138',
          label: 'Facebook',
        },
      ],
      borderColor: '#3B82F6',
      gradient: 'linear-gradient(145deg, #3B82F6, #000)',
    },
    {
      image: mariano,
      title: 'Cedrick Joseph H. Mariano',
      subtitle: 'Project Manager',
      social: [
        {
          icon: <FaGithub />,
          link: 'https://github.com/icodecedd',
          label: 'Github',
        },
        {
          icon: <IoMail />,
          link: 'mailto:marianocedrick3@gmail.com',
          label: 'Email',
        },
        {
          icon: <FaFacebook />,
          link: 'https://www.facebook.com/cedrickjosephmariano',
          label: 'Facebook',
        },
      ],
      borderColor: '#10B981',
      gradient: 'linear-gradient(180deg, #10B981, #000)',
    },
    {
      image: masculino,
      title: 'Paulo D. Masculino',
      subtitle: 'Creative Director',
      social: [
        {
          icon: <FaGithub />,
          link: 'https://github.com/paulomscln',
          label: 'Github',
        },
        {
          icon: <IoMail />,
          link: 'mailto:paulomasculino1022@gmail.com',
          label: 'Email',
        },
        {
          icon: <FaFacebook />,
          link: 'https://www.facebook.com/paulomscln',
          label: 'Facebook',
        },
      ],
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
    },
    {
      image: delapeña,
      title: 'Harold Prince E. dela Peña',
      subtitle: 'IT Specialist',
      social: [
        {
          icon: <FaGithub />,
          link: 'https://github.com/Harowwld',
          label: 'Github',
        },
        {
          icon: <IoMail />,
          link: 'mailto:harolddelapena.11@gmail.com',
          label: 'Email',
        },
        {
          icon: <FaFacebook />,
          link: 'https://www.facebook.com/harold.delapena.927',
          label: 'Facebook',
        },
      ],
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #000)',
    },
  ];

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
            className='major-mono-display-regular'
          >
            Meet tHe teAM
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

      {/* Core Team */}
      <Box mb={{ base: 8, md: 16 }}>
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
          <ChromaGrid
            items={orbyteTeam}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease='power3.out'
          />
        </AnimatedContent>
      </Box>

      {/* Join CTA */}
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
      </AnimatedContent>
    </Container>
  );
};

export default Team;
