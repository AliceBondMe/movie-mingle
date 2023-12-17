import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import { fetchMoviesData } from 'services/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Error } from 'pages/HomePage/HomePage.styled';
import {
  AdditionalNav,
  BackLink,
  Container,
  NavLinkStyled,
  NavList,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesData('movieById', Number(movieId))
      .then(results => {
        setMovieData(results);
        setError('');
      })
      .catch(err => {
        setError(
          'We are sorry, but something went wrong :( Please, try again later. You will be automatically redirected to Home page.'
        );
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
    fetchMoviesData('searchVideos', Number(movieId))
      .then(({ results }) => {
        const teaserId = results.findIndex(
          result => result.type === 'Teaser' || result.type === 'Trailer'
        );
        if (teaserId !== -1) {
          setVideo(results[teaserId].key);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId, navigate]);

  return (
    <Container>
      <BackLink to={state?.from ?? '/'}>
        <MdOutlineKeyboardDoubleArrowLeft />
        Go back
      </BackLink>

      {error === '' && movieData ? (
        <>
          <MovieInfo movieData={movieData} movieTeaser={video} />

          <AdditionalNav>
            <NavList>
              <li>
                <NavLinkStyled to="cast" state={{ from: state?.from }}>
                  Cast
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="reviews" state={{ from: state?.from }}>
                  Reviews
                </NavLinkStyled>
              </li>
            </NavList>
          </AdditionalNav>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Error>{error}</Error>
      )}
    </Container>
  );
};

export default MovieDetailsPage;
