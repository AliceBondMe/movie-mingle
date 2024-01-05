import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { CastList } from 'components/CastList/CastList';
import { Button, Wrap } from './Cast.styled';
import { scrollToAdditionalMenu } from 'helpers/scrollToAdditionalMenu';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesData('cast', movieId)
      .then(({ cast }) => {
        if (!cast.length) {
          setError(
            'We are sorry, but there is no information about cast yet :('
          );
          return;
        }
        setCast(cast);
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

  const isCastLong = cast.length > 10;
  const castToRender = isCastLong ? cast.filter((_, idx) => idx <= 9) : cast;
  const castToSeeMore = isCastLong ? cast.filter((_, idx) => idx > 9) : [];

  return (
    <Wrap>
      {error === '' ? (
        <CastList castToRender={castToRender} />
      ) : (
        <Error>{error}</Error>
      )}

      {isCastLong && !seeMore && (
        <Button
          onClick={() => {
            setSeeMore(true);
          }}
        >
          See more
        </Button>
      )}

      {seeMore && <CastList castToRender={castToSeeMore} />}
    </Wrap>
  );
};

export default Cast;
