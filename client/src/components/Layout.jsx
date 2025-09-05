import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <Center>
      <Container
        as='section'
        id='home'
        minH='100vh'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        position='relative'
        overflow='hidden'
        maxW='100%'
      >
        <Outlet />
      </Container>
      <Navbar />
    </Center>
  );
};
