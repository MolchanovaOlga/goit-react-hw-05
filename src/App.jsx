import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';

import css from './App.module.css';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <div className={css.mainContainer}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
