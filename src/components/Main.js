import React from 'react';
import styled from '@mui/system/styled';
import { Container } from '@mui/material';
 
import { About, Footer, Header, Message, Projects, Skills } from "../components";

const MainWrapper = styled('main')(({ theme }) => ({
  background: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw'
}));

const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <Container sx={{ maxWidth: {xs: '100%', md: "90%", lg: "80%"}}}>
        <Message />
        <Projects />
        <Skills />
      </Container>
      <About />
      <Footer/>
    </MainWrapper>
  )
}

export default Main;
