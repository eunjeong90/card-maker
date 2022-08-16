import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import styled from 'styled-components';
import Login from './components/login/login';
import Home from './components/home/home';

function App({ authService }) {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/home" element={<Home authService={authService} />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
