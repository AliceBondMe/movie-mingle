import { Container } from '@mui/material';
import { YoutubeEmbed } from 'components/YouTubeEmbed/YouTubeEmbed';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';

const Trailer = () => {
  const { movieId } = useParams();
  const [movieTeaser, setMovieTeaser] = useState(null);

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
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <Container>
      {movieTeaser && <YoutubeEmbed embedId={movieTeaser} />}
    </Container>
  );
};

export default Trailer;
