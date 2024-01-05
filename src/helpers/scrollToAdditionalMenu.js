import { scroller } from 'react-scroll';

export const scrollToAdditionalMenu = () => {
  scroller.scrollTo('myScrollToElement', {
    duration: 1000,
    smooth: true,
    offset: -80,
  });
};
