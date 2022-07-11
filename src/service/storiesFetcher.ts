import {
  BASE_URL_PATH,
  TOP_STORIES_PATH,
  NYC_API_KEY,
} from '@/constants/global';

import type { TopStoriesData } from '@/models/Article';

export const storiesFetcher = async (): Promise<TopStoriesData> => {
  const url = `${BASE_URL_PATH}${TOP_STORIES_PATH}home.json?api-key=${NYC_API_KEY}`;

  return fetch(url).then((res) => res.json());
};
