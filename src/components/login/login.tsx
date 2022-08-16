import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/header';

interface LoginProps {
  authService?: any;
}
const Login = ({ authService }: LoginProps) => {
  const navigation = useNavigate();
  const moveHome = (userId: string) => {
    navigation('/home', {
      replace: true,
      state: { id: userId },
    });
  };
  const onLogin = (event: React.MouseEvent) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data: any) => moveHome(data.user.uid))
      .catch((err: string) => console.error(err));
  };
  useEffect(() => {
    authService.onAuthChange((user: any) => {
      user && moveHome(user.id);
    });
  }, []);
  return (
    <DivWrap>
      <Div>
        <Header page="login" />
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
      </Div>
    </DivWrap>
  );
};

const DivWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3bebe;
`;
const Div = styled.div`
  width: 100%;
  max-width: 26em;
  border-radius: 9px;
  background-color: #ffffff;
`;
const Section = styled.section`
  margin: 0 auto;
  padding: 0.4em;
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
