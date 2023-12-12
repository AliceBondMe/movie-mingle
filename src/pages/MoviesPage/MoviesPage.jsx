import MoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Error } from 'pages/HomePage/HomePage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesData } from 'services/tmdb-api';
import { Info, Wrap } from './MoviesPage.styled';
import { Pages } from 'components/Pages/Pages';
import { createPagesButtons } from 'services/createPagesButtons';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToShow, setPagesToShow] = useState([]);

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (value) {
      setQuery(value);
    }
  }, [searchParams]);

  const handleSearch = () => {
    if (query === '') {
      setError('Please enter your search query');
      setPagesToShow([]);
      return;
    }
    setSearchParams({ query: query, page: 1 });
    setError('');
    setCurrentPage(1);
    setMovies([]);
  };

  useEffect(() => {
    const urlQuery = searchParams.get('query');
    const urlPage = Number(searchParams.get('page'));
    setCurrentPage(urlPage);

    if (!urlQuery) return;

    fetchMoviesData('searchByQuery', 0, urlQuery, urlPage)
      .then(({ results, total_pages }) => {
        if (!results.length) {
          setError(
            `We couldn't find movies, mentioning ${urlQuery.toUpperCase()}. Try something else`
          );
          setPagesToShow([]);
          return;
        }
        setMovies(results);
        setPages(total_pages);
        setError('');
        const pagesButtonsArray = createPagesButtons(total_pages, urlPage);
        setPagesToShow(pagesButtonsArray);
      })
      .catch(() => {
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        );
        setPagesToShow([]);
      });
  }, [searchParams, query]);

  const handlePageClick = event => {
    const number = Number(event.target.innerText);
    setCurrentPage(number);
    setSearchParams({ query: query, page: number });
  };

  return (
    <Wrap>
      <Info>
        Ready to explore the world of cinema? <br />
        Simply enter your movie query, and let the magic unfold!
      </Info>
      <Searchbar
        handleSearch={handleSearch}
        handleChange={handleChange}
        query={query}
      />
      {error === '' ? <MoviesList movies={movies} /> : <Error>{error}</Error>}
      {pages > 1 && (
        <Pages
          pagesToShow={pagesToShow}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
      )}
    </Wrap>
  );
};

export default MoviesPage;
