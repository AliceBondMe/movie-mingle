import { Container } from '@mui/material';
import { YoutubeEmbed } from 'components/YouTubeEmbed/YouTubeEmbed';
import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { scrollToAdditionalMenu } from 'helpers/scrollsToElements';
import { fetchMoviesData } from 'services/tmdb-api';
import { ErrorContainer } from './Trailer.styled';

const Trailer = () => {
  const { movieId } = useParams();
  const [movieTeaser, setMovieTeaser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesData('searchVideos', Number(movieId))
      .then(({ results }) => {
        const teaserId = results.findIndex(
          result => result.type === 'Teaser' || result.type === 'Trailer'
        );
        if (teaserId !== -1) {
          setMovieTeaser(results[teaserId].key);
        } else {
          setError('We are sorry, but there is no trailer yet :(');
        }
      })
      .catch(err => {
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        );
      })
      .finally(() => {
        scrollToAdditionalMenu();
      });
  }, [movieId]);

  return (
    <Container>
      {error === '' ? (
        <YoutubeEmbed embedId={movieTeaser} />
      ) : (
        <ErrorContainer>
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default Trailer;
