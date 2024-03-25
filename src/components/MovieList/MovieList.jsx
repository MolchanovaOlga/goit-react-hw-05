import css from './MovieList.module.css';

import MoviesListItem from '../MovieListItem/MovieListItem';
import { Link } from 'react-router-dom';

const MoviesList = ({ moviesList }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(moviesList) &&
        moviesList.length > 0 &&
        moviesList.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <MoviesListItem item={item} />
              <Link to={`/movies/${item.id}`} className={css.link}>
                See more...
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
