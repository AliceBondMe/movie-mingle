import { Info, Item, List, Name, Photo, PhotoWrap } from './CastList.styled';

const POSTERS_URL = 'https://image.tmdb.org/t/p/';

export const CastList = ({ castToRender }) => {
  return (
    <List>
      {castToRender.map(actor => (
        <Item key={actor.id}>
          <PhotoWrap>
            <Photo
              src={
                actor.profile_path
                  ? `${POSTERS_URL}w200${actor.profile_path}`
                  : 'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg'
              }
              alt={actor.name}
            />
          </PhotoWrap>
          <Name>{actor.name}</Name>
          <Info>as {actor.character}</Info>
        </Item>
      ))}
    </List>
  );
};
