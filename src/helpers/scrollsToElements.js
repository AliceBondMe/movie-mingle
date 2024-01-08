import { scroller } from 'react-scroll';

export const scrollToAdditionalMenu = () => {
  scroller.scrollTo('additionalMenu', {
    duration: 1000,
    smooth: true,
    offset: -80,
  });
};

export const scrollMoviesPageStart = () => {
  scroller.scrollTo('moviesPageStart', {
    duration: 1000,
    smooth: true,
    offset: -100,
  });
};
