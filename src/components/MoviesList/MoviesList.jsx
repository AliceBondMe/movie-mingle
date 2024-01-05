import { List } from './MoviesList.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
};

export default MoviesList;
