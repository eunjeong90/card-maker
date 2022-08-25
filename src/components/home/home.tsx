import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';

interface LooseObject {
  [key: string]: {
    [key: string]: number | string | null;
  };
}
interface CustomizedRouterState {
  [myState: string]: {
    id: string;
  };
}

const Home = ({ FileInput, authService, cardRepository }: any) => {
  const navigation = useNavigate();
  const location = useLocation();
  const locationState = location.state as CustomizedRouterState;
  const [cards, setCards] = useState<LooseObject>({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigation('/', {
          replace: true,
        });
      }
    });
  });

  const createOrUpdateCard = (card: { id: string }) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveDB(userId, card);
  };
  const deleteCard = (card: { id: string }) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeDB(userId, card);
  };
  return (
    <Div>
      <Header page="home" onLogout={onLogout} />
      <Container>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          cardRepository={cardRepository}
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
