import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';

const Home = ({ authService }: any) => {
  const navigation = useNavigate();
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'eunjeong',
      company: 'music',
      theme: ['colorful', 'dark', 'light'],
      title: 'backsoo',
      email: 'cuttlefish77@naver.com',
      message: '슈슈슈슉',
      fileURL: null,
    },
  ]);
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
      <Container>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </Container>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  > section {
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    flex-flow: column;
    > section {
      width: 100%;
    }
  }
`;

export default Home;
