import styled from 'styled-components';
import CardAddForm from './CardAddForm';
import CardEditForm from './CardEditForm';

const Editor = ({ cards, addCard, updateCard, deleteCard }: any) => {
  return (
    <section>
      <Heading>Card Maker</Heading>
      {Object.keys(cards).map((key: any) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm addCard={addCard} />
    </section>
  );
};

const Heading = styled.h1`
  color: #385461;
  text-align: center;
`;
export default Editor;
