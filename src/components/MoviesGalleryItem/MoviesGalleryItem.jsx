import css from './MoviesGalleryItem.module.css';

const MoviesGalleryItem = ({ item }) => {
  const popularity = item.popularity.toFixed(1);
  const fullYear = new Date(item.release_date).getFullYear();
  return (
    <div className={css.card}>
      <img src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`} />
      <div className={css.container}>
        <h2 className={css.title}>{item.title}</h2>
        <p>
          Popularity: <span className={css.span}>{popularity}</span>
        </p>
        <p>
          Year: <span className={css.span}>{fullYear}</span>
        </p>
      </div>
    </div>
  );
};

export default MoviesGalleryItem;
