import { Iframe, Video } from './YouTubeEmbed.styled';

export const YoutubeEmbed = ({ embedId }) => (
  <Video>
    <Iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Video>
);
