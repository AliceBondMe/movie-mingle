import { useContext, useEffect, useState } from 'react';
import {
  Button,
  RemoveButton,
  VideoMinus,
  VideoPlus,
} from './WatchlistButton.styled';
import { WatchlistContext } from 'components/App';

const MOVIES_KEY = 'moviesWatchlist';

export const WatchlistButton = ({ movieData }) => {
  const [isMovieSaved, setMovieSaved] = useState(false);
  const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } =
    useContext(WatchlistContext);

  useEffect(() => {
    const isSaved = watchlist.find(({ id }) => id === movieData.id);
    isSaved ? setMovieSaved(true) : setMovieSaved(false);
  }, [movieData.id, watchlist]);

  useEffect(() => {
    if (watchlist.length === 0) {
      return;
    }
    localStorage.setItem(MOVIES_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      {isMovieSaved ? (
        <RemoveButton
          type="button"
          aria-label="remove from watchlist"
          onClick={() => removeMovieFromWatchlist(movieData)}
        >
          <VideoMinus />
        </RemoveButton>
      ) : (
        <Button
          type="button"
          aria-label="add to watchlist"
          onClick={() => {
            addMovieToWatchlist(movieData);
          }}
        >
          <VideoPlus />
        </Button>
      )}
    </>
  );
};
