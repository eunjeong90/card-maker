import styled from 'styled-components';
import CardAddForm from './CardAddForm';
import CardEditForm from './CardEditForm';

const Editor = ({ cards, addCard, updateCard, deleteCard }: any) => {
  return (
    <section>
      <Heading>Card Maker</Heading>
      <CardAddForm addCard={addCard} card={cards} />
      {Object.keys(cards).map((key: string) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
    </section>
  );
};

const Heading = styled.h1`
  color: #385461;
  text-align: center;
`;
export default Editor;
