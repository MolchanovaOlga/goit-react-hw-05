import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import { requestCastById } from '../services/api';
import { useParams } from 'react-router-dom';
import CastItem from '../CastItem/CastItem';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchcastmovie = async () => {
      try {
        const data = await requestCastById(movieId);
        console.log(data);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcastmovie();
  }, [movieId]);

  return (
    <>
      {Array.isArray(cast) && cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map(item => {
            return (
              <li className={css.item} key={item.id}>
                <CastItem item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
