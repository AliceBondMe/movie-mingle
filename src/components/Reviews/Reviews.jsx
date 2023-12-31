import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { Author, Container, Item, Url } from './Reviews.styled';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { scrollToAdditionalMenu } from 'helpers/scrollsToElements';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesData('reviews', movieId)
      .then(({ results }) => {
        if (!results.length) {
          setError('We are sorry, but there are no reviews yet :(');
          return;
        }
        setReviews(results);
        setError('');
      })
      .catch(() =>
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        )
      )
      .finally(() => {
        scrollToAdditionalMenu();
      });
  }, [movieId]);

  return (
    <Container>
      {error === '' ? (
        <div>
          <ul>
            {reviews.map(review => (
              <Item key={review.id}>
                <Author>
                  <IoPersonCircleSharp size="28" />
                  {review.author}
                </Author>
                <p>
                  {review.content.length < 500
                    ? review.content
                    : `${review.content.slice(0, 500)}...`}
                </p>
                {review.content.length > 500 && (
                  <Url href={review.url} target="blank">
                    Read full review
                  </Url>
                )}
              </Item>
            ))}
          </ul>
        </div>
      ) : (
        <Error>{error}</Error>
      )}
    </Container>
  );
};

export default Reviews;
