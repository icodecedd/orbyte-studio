import { Box, Heading, Image } from '@chakra-ui/react';
import orbyteLogo from '@/assets/orbyte-logo.webp';
import FadeContent from '@/blocks/Animations/FadeContent/FadeContent';

const Projects = () => {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing='ease-out'
      initialOpacity={0}
    >
      <Box
        className='bebas-neue-regular'
        fontSize='3rem'
        color='white'
        display='flex'
        alignItems='center'
      >
        <Image height='100px' src={orbyteLogo} alt='Orbyte Logo' />
        <Heading className='bebas-neue-regular' fontSize='3rem' mt={2}>
          Coming{' '}
          <span style={{ color: '#a0a0ff' }} className='bebas-neue-regular'>
            Soon
          </span>
          ...
        </Heading>
      </Box>
    </FadeContent>
  );
};

export default Projects;
