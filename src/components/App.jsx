import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { ColorPicker } from 'pages/ColorPicker';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './Home/Login';
import { Register } from './Home/Register';
import styled from '@emotion/styled';
import { useState } from 'react';

export const App = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const StyledNavLink = styled(NavLink)`
    &:active {
      color: red;
    }
  `;
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <header>
        <nav>
          <ul>
            <li onClick={() => setCurrentIdx(0)}>
              <StyledNavLink
                className={currentIdx === 0 ? 'current' : ''}
                to="/"
              >
                Home Page
              </StyledNavLink>
            </li>
            <li onClick={() => setCurrentIdx(1)}>
              <StyledNavLink
                className={currentIdx === 1 ? 'current' : ''}
                to="/color-picker"
              >
                Color Picker
              </StyledNavLink>
            </li>
            <li onClick={() => setCurrentIdx(2)}>
              <StyledNavLink
                className={currentIdx === 2 ? 'current' : ''}
                to="/lalala"
              >
                Lalalala
              </StyledNavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
