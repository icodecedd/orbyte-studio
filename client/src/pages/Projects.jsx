import { Box, Heading, Image } from '@chakra-ui/react';
import orbyteLogo from '@/assets/orbyte-logo.png';

const Projects = () => {
  return (
    <Box
      className='bebas-neue-regular'
      fontSize='3rem'
      color='white'
      display='flex'
      alignItems='center'
    >
      <Image height='100px' src={orbyteLogo} alt='Orbyte Logo' />
      <Heading className='bebas-neue-regular' fontSize='3rem' mt={2}>
        Coming Soon...
      </Heading>
    </Box>
  );
};

export default Projects;
