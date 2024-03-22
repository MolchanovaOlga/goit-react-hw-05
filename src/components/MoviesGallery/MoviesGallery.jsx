import css from './MoviesGallery.module.css';

import MoviesGalleryItem from '../MoviesGalleryItem/MoviesGalleryItem';

const MoviesGallery = ({ trendingMovies }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(trendingMovies) &&
        trendingMovies.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <MoviesGalleryItem item={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesGallery;
