import MoviesList from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { Info, Wrap } from './WatchlistPage.styled';

const MOVIES_KEY = 'moviesWatchlist';

const WatchlistPage = () => {
  const [moviesToWatch] = useState(
    JSON.parse(localStorage.getItem(MOVIES_KEY)) || []
  );
  return (
    <Wrap>
      <Info>
        Ready for a movie night? <br />
        Explore your watchlist and find the perfect film!
      </Info>
      <MoviesList movies={moviesToWatch} />
    </Wrap>
  );
};

export default WatchlistPage;
