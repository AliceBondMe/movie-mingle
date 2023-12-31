import axios from 'axios';

const api_key = '81bc6a75d9ad77927c9b3f7e8ad30411';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMoviesData(type, id, query, page) {
  const endpointByType = {
    trending: '/trending/movie/day',
    movieById: `/movie/${id}`,
    searchByQuery: '/search/movie',
    searchVideos: `/movie/${id}/videos`,
    cast: `/movie/${id}/credits`,
    reviews: `/movie/${id}/reviews`,
    image: `/movie/${id}/images`,
  };

  const searchParams = new URLSearchParams({
    query: query,
    include_adult: false,
    page: page,
  });

  const response = await axios.get(
    `${BASE_URL}${endpointByType[type]}?api_key=${api_key}&${
      type === 'searchByQuery' ? searchParams : ''
    }`
  );
  return response.data;
}
