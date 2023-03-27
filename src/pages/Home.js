import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li onClick={() => setCurrentIdx(0)}>
          <Link
            className={currentIdx === 0 ? 'homeCurrentRouter' : ''}
            to="login"
          >
            Login
          </Link>
        </li>
        <li onClick={() => setCurrentIdx(1)}>
          <Link
            className={currentIdx === 1 ? 'homeCurrentRouter' : ''}
            to="register"
          >
            Register
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
