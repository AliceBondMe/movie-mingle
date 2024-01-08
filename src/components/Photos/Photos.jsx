import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { Container, ImagesItem, ImagesList } from './Photos.styled';
import { ImageModal } from 'components/ImageModal/ImageModal';
import { Image } from 'components/ImageModal/ImageModal.styled';
import { scrollToAdditionalMenu } from 'helpers/scrollsToElements';
import { Error } from 'pages/HomePage/HomePage.styled';

const SMALL_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

const Photos = () => {
  const { movieId } = useParams();
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesData('image', movieId)
      .then(({ backdrops }) => {
        if (!backdrops.length) {
          setError('We are sorry, but there are no photos yet :(');
          return;
        }
        setImages(backdrops.map(item => item.file_path));
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

  const handleClick = e => {
    setCurrentImage(e.target.dataset.path);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <Container>
      {error === '' ? (
        <ImagesList>
          {images.map(image => (
            <ImagesItem key={image} onClick={handleClick}>
              <Image
                src={`${SMALL_IMAGE_PATH}${image}`}
                alt="movie-scene"
                data-path={image}
              ></Image>
            </ImagesItem>
          ))}
        </ImagesList>
      ) : (
        <Error>{error}</Error>
      )}
      {isModalOpen && (
        <ImageModal currentImage={currentImage} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default Photos;
