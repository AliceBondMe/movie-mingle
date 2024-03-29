import { createContext, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { GlobalStyle } from 'GlobalStyle';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const WatchlistPage = lazy(() =>
  import('../pages/WatchlistPage/WatchlistPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Trailer = lazy(() => import('./Trailer/Trailer'));
const Photos = lazy(() => import('./Photos/Photos'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const THEME_KEY = 'theme';
const MOVIES_KEY = 'moviesWatchlist';

export const ThemeContext = createContext(null);
export const WatchlistContext = createContext([]);

export const App = () => {
  const [theme, setTheme] = useState('');
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem(MOVIES_KEY)) || []
  );

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
    savedTheme && setTheme(savedTheme);
  }, []);

  useEffect(() => {
    theme !== '' && localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addMovieToWatchlist = movieData => {
    setWatchlist(prev => [...prev, movieData]);
  };

  const removeMovieFromWatchlist = movieData => {
    if (watchlist.length === 1) {
      localStorage.removeItem(MOVIES_KEY);
    }
    setWatchlist(prev => prev.filter(({ id }) => id !== movieData.id));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <WatchlistContext.Provider
        value={{ watchlist, addMovieToWatchlist, removeMovieFromWatchlist }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="/movies/:movieId/trailer" element={<Trailer />} />
              <Route path="/movies/:movieId/photos" element={<Photos />} />
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <GlobalStyle $theme={theme} />
      </WatchlistContext.Provider>
    </ThemeContext.Provider>
  );
};
