import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { Container, ImagesItem, ImagesList } from './Photos.styled';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300/';

const Photos = () => {
  const { movieId } = useParams();
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(movieId);
    if (!movieId) {
      return;
    }
    fetchMoviesData('image', movieId)
      .then(({ backdrops }) => {
        if (!backdrops.length) {
          setError('We are sorry, but there are no photos yet');
          return;
        }
        setImages(backdrops.map(item => `${IMAGE_PATH}${item.file_path}`));
        setError('');
      })
      .catch(() =>
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        )
      );
  }, [movieId]);

  const handleClick = () => {};

  return (
    <Container>
      {error === '' ? (
        <ImagesList>
          {images.map(image => (
            <ImagesItem key={image} onClick={handleClick}>
              <img src={image} alt="movie-scene"></img>
            </ImagesItem>
          ))}
        </ImagesList>
      ) : (
        <p>{error}</p>
      )}
    </Container>
  );
};

export default Photos;
