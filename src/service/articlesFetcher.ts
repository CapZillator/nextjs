import { TOP_STORIES_PATH, NYC_API_KEY } from 'constants/global';

export const articlesFetcher = async (category: string) => {
  return fetch(
    `${TOP_STORIES_PATH}/${category}.json?api-key=${NYC_API_KEY}`
  ).then((res) => res.json());
};
