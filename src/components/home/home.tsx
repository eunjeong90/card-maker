import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';

const Home = () => {
  return (
    <Div>
      <Header page="home" />
      로그인 시 보일 화면
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
`;

export default Home;
