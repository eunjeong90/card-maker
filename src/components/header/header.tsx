import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <HomeHeader>
      {true && <LogBtn>Logout</LogBtn>}
      <span>😎</span>
      <h1>Card Maker</h1>
    </HomeHeader>
  );
};

const HomeHeader = styled.header`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0.5em;
  background-color: #385461;
  span {
    font-size: 2em;
  }
  h1 {
    margin: 0;
    color: #ffffff;
  }
`;
const LogBtn = styled.button`
  position: absolute;
  right: 3em;
  top: 1em;
  padding: 0.8em;
  border-radius: 10%;
  background-color: #848688;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Header;
