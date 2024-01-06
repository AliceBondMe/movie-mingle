import { useContext, useEffect, useState } from 'react';
import { Button, VideoMinus, VideoPlus } from './WatchlistButton.styled';
import { WatchlistContext } from 'components/App';

const MOVIES_KEY = 'moviesWatchlist';

export const WatchlistButton = ({ movieData }) => {
  const [isMovieSaved, setMovieSaved] = useState(false);
  const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } =
    useContext(WatchlistContext);
  const [watchlistUsed, setWatchlistUsed] = useState(false);

  useEffect(() => {
    const isSaved = watchlist.find(({ id }) => id === movieData.id);
    isSaved ? setMovieSaved(true) : setMovieSaved(false);
  }, [movieData.id, watchlist]);

  useEffect(() => {
    if (!watchlistUsed) return;
    localStorage.setItem(MOVIES_KEY, JSON.stringify(watchlist));
  }, [watchlist, watchlistUsed]);

  return (
    <>
      {isMovieSaved ? (
        <Button
          type="button"
          aria-label="remove from watchlist"
          onClick={() => removeMovieFromWatchlist(movieData)}
        >
          <VideoMinus />
        </Button>
      ) : (
        <Button
          type="button"
          aria-label="add to watchlist"
          onClick={() => {
            addMovieToWatchlist(movieData);
            setWatchlistUsed(true);
          }}
        >
          <VideoPlus />
        </Button>
      )}
    </>
  );
};
