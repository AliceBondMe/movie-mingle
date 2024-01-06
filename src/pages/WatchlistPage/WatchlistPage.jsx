import MoviesList from 'components/MoviesList/MoviesList';
import { HomeLink, Info, Wrap } from './WatchlistPage.styled';
import { useContext } from 'react';
import { WatchlistContext } from 'components/App';

const WatchlistPage = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <Wrap>
      {watchlist.length === 0 ? (
        <Info>
          Your watchlist is still empty :( <br />
          Why don't you go to our <HomeLink to="/">Home</HomeLink> page to find
          some popular movies?
        </Info>
      ) : (
        <Info>
          Ready for a movie night? <br />
          Explore your watchlist and find the perfect film!
        </Info>
      )}
      <MoviesList movies={watchlist} />
    </Wrap>
  );
};

export default WatchlistPage;
