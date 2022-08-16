import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/header';

const Home = ({ authService }: any) => {
  const navigation = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (!user) {
        navigation('/', {
          replace: true,
        });
      }
    });
  });
  return (
    <Div>
      <Header page="home" onLogout={onLogout} />
      로그인 시 보일 화면
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
`;

export default Home;
