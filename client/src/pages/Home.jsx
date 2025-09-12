import FadeContent from '@/blocks/Animations/FadeContent/FadeContent';
import Beams from '@/blocks/Backgrounds/Beams/Beams';
import ShinyText from '@/blocks/TextAnimations/ShinyText/ShinyText';
import { Box, Container, Flex, IconButton, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

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
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor='#ffffff'
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </Box>

      {/* Header */}
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
        {/* Logo and Copyright */}
        <FadeContent
          blur={true}
          duration={1500}
          easing='ease-out'
          initialOpacity={0}
        >
          <Box
            fontSize={{ base: '2xs', md: 'xs' }}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            fontWeight='bold'
            className='major-mono-display-regular'
          >
            &copy; 2025 ORbyte StVdio.
          </Box>
        </FadeContent>

        {/* Social Icons */}
        <FadeContent
          blur={true}
          duration={1500}
          easing='ease-out'
          initialOpacity={0}
        >
          <Box display='flex' gap={2}>
            <IconButton
              variant='ghost'
              aria-label='GitHub'
              color='white'
              borderRadius='full'
              _hover={{ bg: 'white', color: 'black' }}
              as={RouterLink}
              target='_blank'
              rel='noopener noreferrer'
              to='https://github.com/Orbyte-Studio'
            >
              <FaGithub />
            </IconButton>
            <IconButton
              variant='ghost'
              aria-label='Facebook'
              color='white'
              borderRadius='full'
              _hover={{ bg: 'white', color: 'black' }}
              as={RouterLink}
              target='_blank'
              rel='noopener noreferrer'
              to='https://www.facebook.com/profile.php?id=61580015592005'
            >
              <FaFacebook />
            </IconButton>
          </Box>
        </FadeContent>
      </Flex>

      {/* Content */}
      <FadeContent
        blur={true}
        duration={1000}
        easing='ease-out'
        initialOpacity={0}
      >
        <Box
          position='relative'
          zIndex={1}
          textAlign='center'
          px={{ base: 4, md: 0 }}
        >
          <Box
            as='h1'
            fontSize={{ base: '5xl', md: '7xl' }}
            mb={4}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            className='major-mono-display-regular'
          >
            ORbyte StVdio
          </Box>
          <Box
            as='h1'
            fontSize={{ base: 'md', md: 'lg' }}
            mb={8}
            color='white'
            textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
            fontStyle='italic'
            className='work-sans-regular'
          >
            <ShinyText
              text='We Are Orbyte Studio, Where Your Dreams Are Byte Away From The Future'
              disabled={false}
              speed={3}
              className='custom-class'
            />
          </Box>
        </Box>
      </FadeContent>
    </Container>
  );
};

export default Home;
