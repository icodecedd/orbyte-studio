import FadeContent from '@/blocks/Animations/FadeContent/FadeContent';
import { Box, Button, Menu, Portal, IconButton, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  FiHome,
  FiInfo,
  FiLock,
  FiLogIn,
  FiMail,
  FiMenu,
  FiMessageSquare,
  FiUsers,
  FiX,
} from 'react-icons/fi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      bottom={{ base: 4, md: 8 }}
      zIndex={2}
      display='flex'
      position='fixed'
      gap={{ base: 0.5, md: 1 }}
      p={{ base: 1, md: 1.5 }}
      borderRadius='2xl'
      bg='rgba(255, 255, 255, 0.1)'
      backdropFilter='blur(12px)'
      border='1px solid rgba(255, 255, 255, 0.2)'
      boxShadow='0 8px 32px 0 rgba(31, 38, 135, 0.15)'
    >
      <FadeContent
        blur={true}
        duration={1000}
        easing='ease-out'
        initialOpacity={0}
      >
        <Button
          as={RouterLink}
          to='/'
          variant='ghost'
          color='white'
          size='sm'
          fontWeight='medium'
          fontSize={{ base: 'xs', md: 'sm' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 2 }}
        >
          <FiHome
            size={16}
            style={{ marginRight: { base: '4px', md: '6px' } }}
          />
          <Text mt={1}>Home</Text>
        </Button>
        <Button
          as={RouterLink}
          to='/about'
          variant='ghost'
          color='white'
          size='sm'
          fontWeight='medium'
          fontSize={{ base: 'xs', md: 'sm' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 2 }}
        >
          <FiInfo
            size={16}
            style={{ marginRight: { base: '4px', md: '6px' } }}
          />
          <Text mt={1}>About</Text>
        </Button>
        <Button
          as={RouterLink}
          to='/team'
          variant='ghost'
          color='white'
          size='sm'
          fontWeight='medium'
          fontSize={{ base: 'xs', md: 'sm' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 2 }}
        >
          <FiUsers
            size={16}
            style={{ marginRight: { base: '4px', md: '6px' } }}
          />
          <Text mt={1}>Team</Text>
        </Button>
        <Button
          as={RouterLink}
          to='/projects'
          variant='ghost'
          color='white'
          size='sm'
          fontWeight='medium'
          fontSize={{ base: 'xs', md: 'sm' }}
          borderRadius='lg'
          transition='all 0.3s ease-in-out'
          bg='rgba(255, 255, 255, 0.05)'
          _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          px={{ base: 1, md: 2 }}
        >
          <IoBriefcaseOutline
            size={16}
            style={{ marginRight: { base: '4px', md: '6px' } }}
          />
          <Text mt={1}>Projects</Text>
        </Button>

        <Menu.Root
          closeOnSelect
          onExitComplete={() => setIsMenuOpen(false)}
          positioning={{ placement: 'top-end' }}
          size={{ base: 'sm', md: 'md' }}
        >
          <Menu.Trigger asChild>
            <IconButton
              variant='ghost'
              aria-label='Menu'
              color='white'
              size='sm'
              borderRadius='lg'
              transition='all 0.3s ease-in-out'
              bg='rgba(255, 255, 255, 0.05)'
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              _expanded={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </IconButton>
          </Menu.Trigger>

          <Portal>
            <Menu.Positioner>
              <Menu.Content
                borderRadius='xl'
                bg='rgba(255, 255, 255, 0.1)'
                backdropFilter='blur(12px)'
                border='1px solid rgba(255, 255, 255, 0.2)'
                boxShadow='0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                p={2}
                minW={{ base: '120px', md: '140px' }}
              >
                <Menu.Item
                  value='contact'
                  as={RouterLink}
                  to='/contact'
                  color='white'
                  borderRadius='lg'
                  fontWeight='medium'
                  fontSize={{ base: 'xs', md: 'sm' }}
                  bg='rgba(255, 255, 255, 0.05)'
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
                  py={2}
                  px={3}
                >
                  <FiMail size={16} style={{ marginRight: '8px' }} />
                  <Text mt={1}>Contact</Text>
                </Menu.Item>
                <Menu.Item
                  as={RouterLink}
                  to='/feedback'
                  value='feedback'
                  color='white'
                  borderRadius='lg'
                  fontWeight='medium'
                  fontSize={{ base: 'xs', md: 'sm' }}
                  bg='rgba(255, 255, 255, 0.05)'
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
                  py={2}
                  px={3}
                >
                  <FiMessageSquare size={16} style={{ marginRight: '8px' }} />
                  <Text mt={1}>Feedback</Text>
                </Menu.Item>
                <Menu.Item
                  as={RouterLink}
                  disabled
                  value='login'
                  color='white'
                  borderRadius='lg'
                  fontWeight='medium'
                  fontSize={{ base: 'xs', md: 'sm' }}
                  bg='rgba(255, 255, 255, 0.05)'
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
                  py={2}
                  px={3}
                >
                  <FiLock size={16} style={{ marginRight: '8px' }} />
                  Coming Soon
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </FadeContent>
    </Box>
  );
};
