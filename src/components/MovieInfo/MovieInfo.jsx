import {
  Container,
  Information,
  LineHeader,
  Paragraph,
  Poster,
  Title,
} from './MovieInfo.styled';

const POSTERS_URL = 'https://image.tmdb.org/t/p/';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const MovieInfo = ({ movieData }) => {
  return (
    <Container>
      <Poster
        src={
          movieData.poster_path
            ? `${POSTERS_URL}w500${movieData.poster_path}`
            : 'https://cdn.pixabay.com/photo/2014/01/21/16/01/backdrop-249158_1280.jpg'
        }
        alt={movieData.title}
      />
      <Information>
        <Title>{`${movieData.title} (${
          movieData.release_date
            ? new Date(movieData.release_date).getFullYear()
            : ''
        })`}</Title>

        {movieData.title !== movieData.original_title && (
          <Paragraph>
            <LineHeader>Original Title</LineHeader> {movieData.original_title}
          </Paragraph>
        )}

        {movieData.production_countries &&
          movieData.production_countries.length !== 0 && (
            <Paragraph>
              <LineHeader>Production</LineHeader>{' '}
              {movieData.production_countries
                .map(({ name }) => name)
                .join(', ')}
            </Paragraph>
          )}

        {movieData.release_date && (
          <Paragraph>
            <LineHeader>Release date</LineHeader>{' '}
            {new Date(movieData.release_date).toLocaleDateString(
              'en-US',
              dateOptions
            )}
          </Paragraph>
        )}

        <Paragraph>
          <LineHeader>Rating</LineHeader>
          {movieData.vote_average === 0
            ? 'Not rated'
            : `${Math.round(movieData.vote_average * 10)}%`}
          {movieData.vote_count === 0
            ? ''
            : ` ( ${movieData.vote_count} votes)`}
        </Paragraph>

        {movieData.genres && movieData.genres.length !== 0 && (
          <Paragraph>
            <LineHeader>Genres</LineHeader>{' '}
            {movieData.genres.map(({ name }) => name).join(', ')}
          </Paragraph>
        )}

        {movieData.runtime && (
          <Paragraph>
            <LineHeader>Duration</LineHeader>
            {movieData.runtime < 60
              ? `${movieData.runtime}m`
              : `${Math.floor(movieData.runtime / 60)}h ${Math.floor(
                  movieData.runtime % 60
                )}m`}
          </Paragraph>
        )}

        {movieData.tagline && (
          <Paragraph>
            <LineHeader>Promo</LineHeader> {movieData.tagline}
          </Paragraph>
        )}

        {movieData.overview && (
          <Paragraph>
            <LineHeader>Overview</LineHeader> {movieData.overview}
          </Paragraph>
        )}
      </Information>
    </Container>
  );
};
export default MovieInfo;
