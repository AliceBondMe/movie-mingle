import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './ImageModal.styled';
import { useEffect } from 'react';

const BIG_IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const modalRoot = document.querySelector('#modal-root');

export const ImageModal = ({ currentImage, closeModal }) => {
  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalContainer>
        <img src={`${BIG_IMAGE_PATH}${currentImage}`} alt="movie-scene" />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
