import styled from 'styled-components';
import Card from '../card/card';

const Preview = ({ cards }: any) => {
  return (
    <section>
      <Heading>Card Preview</Heading>
      <Wrapper>
        {Object.keys(cards).map((key: any) => (
          <div key={key}>
            <Card card={cards[key]} />
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
