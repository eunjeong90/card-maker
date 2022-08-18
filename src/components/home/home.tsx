import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';

interface LooseObject {
  [key: string]: {
    [key: string]: number | string | null;
  };
}
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
  const [cards, setCards] = useState<LooseObject>({
    '1': {
      id: '1',
      name: '은정',
      company: 'music',
      theme: 'light',
      title: 'backsoo😎',
      email: 'amiya@mulzoom.plz',
      message: '놀고싶어요',
      fileURL: null,
    },
    '2': {
      id: '2',
      name: '은정',
      company: 'music',
      theme: 'dark',
      title: 'backsoo😎',
      email: 'amiya@mulzoom.plz',
      message: '놀고싶어요',
      fileURL: null,
    },
    '3': {
      id: '3',
      name: '은정',
      company: 'music',
      theme: 'colorful',
      title: 'backsoo😎',
      email: 'amiya@mulzoom.plz',
      message: '놀고싶어요',
      fileURL: null,
    },
  });
  const createOrUpdateCard = (card: { id: string }) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card: { id: string }) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <Div>
      <Header page="home" onLogout={onLogout} />
      <Container>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
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
