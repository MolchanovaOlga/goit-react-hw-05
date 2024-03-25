import { useEffect } from 'react';
import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { requestReviewsById } from '../services/api';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestReviewsById(movieId);
        console.log(data);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && !reviews && <ErrorMessage />}
      {Array.isArray(reviews) && reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews.map(item => {
            return (
              <li className={css.item} key={item.id}>
                <ReviewsItem item={item} />
              </li>
            );
          })}
        </ul>
      )}
      {Array.isArray(reviews) && reviews.length === 0 && (
        <p className={css.noReviewText}>
          We don't have any reviews for this movie.
        </p>
      )}
    </>
  );
};

export default MovieReviews;
