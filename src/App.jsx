import { Navigate, Route, Routes } from 'react-router-dom';

import css from './App.module.css';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <div className={css.mainContainer}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route
              path="/movies/:movieId/*"
              element={<MovieDetailsPage />}
            ></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
