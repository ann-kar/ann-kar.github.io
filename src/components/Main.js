import React from 'react';
import styled from '@mui/system/styled';

import { Header, Projects } from "../components";

const MainWrapper = styled('main')(({ theme }) => ({
  background: `linear-gradient(${theme.palette.greys.grey100}, ${theme.palette.greys.grey200})`,
}));

const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <Projects />
    </MainWrapper>
  )
}

export default Main;
