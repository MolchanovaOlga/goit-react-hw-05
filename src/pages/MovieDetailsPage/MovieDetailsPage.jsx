import { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { requestMovieById } from '../../components/services/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setmovieData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestMovieById(movieId);
        console.log(data);
        setmovieData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchmovies();
  }, [movieId]);

  const srcImg =
    movieData && movieData.poster_path
      ? `http://image.tmdb.org/t/p/w300/${movieData.poster_path}`
      : defaultImg;
  const altImg = movieData && movieData.title ? movieData.title : 'poster';

  return (
    <div className={css.pageContent}>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <img className={css.img} src={srcImg} alt={altImg} width={300} />
        </div>
        <div>
          {loading && <Loader />}
          {error && !movieData && <ErrorMessage />}
          {movieData && movieData.release_date && (
            <h2 className={css.title}>{`${movieData.title} (${new Date(
              movieData.release_date
            ).getFullYear()})`}</h2>
          )}
          <div className={css.text}>
            {movieData && movieData.genres && movieData.genres.length > 0 && (
              <p>
                <span className={css.span}>Genres:</span>{' '}
                {movieData.genres
                  .map(item => {
                    return item.name;
                  })
                  .join(', ')}
              </p>
            )}
            {movieData && (
              <p>
                <span className={css.span}>Rating:</span>{' '}
                {movieData.vote_average.toFixed(1)}
              </p>
            )}
            {movieData && (
              <p>
                <span className={css.span}>Budget:</span> {movieData.budget}
              </p>
            )}
            {movieData &&
              movieData.production_countries &&
              movieData.production_countries.length > 0 && (
                <p>
                  <span className={css.span}>Country:</span>{' '}
                  {movieData.production_countries
                    .map(item => {
                      return item.name;
                    })
                    .join(', ')}
                </p>
              )}
            {movieData && movieData.runtime && (
              <p>
                <span className={css.span}>Runtime:</span> {movieData.runtime}{' '}
                mins
              </p>
            )}
            {movieData && movieData.overview && (
              <p>
                <span className={css.span}>Overview:</span> {movieData.overview}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={css.navContainer}>
        <div className={css.linkContainer}>
          <NavLink className={css.castLink} to={'cast'}>
            Cast
          </NavLink>
          <NavLink className={css.castReviews} to={'reviews'}>
            Reviews
          </NavLink>
        </div>
        <div className={css.routesContainer}>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
