import './app.css';
import styled from 'styled-components';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <AppWrapper>
      <Login authService={authService} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3bebe;
`;

export default App;
