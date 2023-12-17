import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchMoviesData } from 'services/tmdb-api';
import { Error, Hero, Info, PageTitle, Title } from './HomePage.styled';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [heroImage, setHeroImage] = useState('');

  useEffect(() => {
    fetchMoviesData('trending')
      .then(({ results }) => {
        if (!results.length) {
          setError(
            'We are sorry, but something went wrong :( Please, try again later'
          );
          return;
        }
        setMovies(results);
        setError('');
        const randomIndex = Math.floor(Math.random() * results.length + 0);
        setHeroImage(`${IMAGE_PATH}${results[randomIndex]?.backdrop_path}`);
      })
      .catch(() =>
        setError(
          'We are sorry, but something went wrong :( Please, try again later'
        )
      );
  }, []);

  return (
    <div>
      <Hero $heroImage={heroImage}>
        <PageTitle>
          Welcome to MovieMingle - <br />
          Your Gateway to Cinematic Excellence!
        </PageTitle>
        <Info>
          Discover the latest and trending films or <br />
          explore a world of movies tailored to your preferences. <br />
          Whether you're in the mood for blockbuster hits or hidden gems, <br />
          our powerful search engine has you covered.
        </Info>
      </Hero>
      <Title>Popular today:</Title>
      {error === '' ? <MoviesList movies={movies} /> : <Error>{error}</Error>}
    </div>
  );
};

export default HomePage;
