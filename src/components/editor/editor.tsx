import styled from 'styled-components';
import CardAddForm from './CardAddForm';
import CardEditForm from './CardEditForm';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }: any) => {
  return (
    <section>
      <Heading>Card Maker</Heading>
      <CardAddForm FileInput={FileInput} addCard={addCard} card={cards} />
      {Object.keys(cards).map((key: string) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
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
