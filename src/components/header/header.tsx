import styled from 'styled-components';

const Header = ({ authService }: any) => {
  return (
    <HomeHeader>
      {true && <LogoutBtn>Logout</LogoutBtn>}
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
  border-radius: 9px 9px 0 0;
  background-color: #385461;
  span {
    font-size: 2em;
  }
  h1 {
    margin: 0;
    color: #ffffff;
  }
`;
const LogoutBtn = styled.button`
  position: absolute;
  right: 1em;
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
