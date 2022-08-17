import styled from 'styled-components';
import Card from '../card/card';

const Preview = ({ cards }: any) => {
  return (
    <section>
      <Heading>Card Preview</Heading>
      <Wrapper>
        {cards.map((item: any) => (
          <div key={item.id}>
            <Card card={item} />
          </div>
        ))}
      </Wrapper>
    </section>
  );
};

const Heading = styled.h1`
  color: #385461;
  text-align: center;
`;
const Wrapper = styled.ul`
  padding: 1em;
`;
export default Preview;
