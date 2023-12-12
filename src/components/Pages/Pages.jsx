import { Button, ButtonsList } from './Pages.styled';

export const Pages = ({ pagesToShow, handlePageClick, currentPage }) => {
  return (
    <ButtonsList>
      {pagesToShow.map((page, idx) => (
        <li key={page}>
          <Button onClick={handlePageClick} $underline={currentPage === page}>
            {page}
          </Button>
        </li>
      ))}
    </ButtonsList>
  );
};
