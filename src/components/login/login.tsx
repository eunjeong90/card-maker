import React from 'react';
import styled from 'styled-components';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }: any) => {
  const onLogin = (event: React.MouseEvent) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log)
      .catch((err: string) => console.error(err));
  };
  return (
    <section>
      <Header />
      <Section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </Section>
      <Footer />
    </section>
  );
};

const Section = styled.section`
  max-width: 26em;
  margin: 0 auto;
  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
  }
  ul {
    width: 100%;
    padding: 0;
    li {
      list-style: none;
      button {
        width: 100%;
        border-radius: 50px;
        border: 3px solid;
        border-color: #385461;
        outline: none;
        background-color: #ffffff;
        padding: 0.4em;
        font-size: 1.5em;
        cursor: pointer;
        &:last-child {
          margin-top: 0.5em;
        }
      }
    }
  }
`;

export default Login;
