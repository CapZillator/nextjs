import { NYC_API_KEY } from 'constants/global';
import type { TopStoriesData } from 'models/Article';

export const storiesFetcher = async (path: string): Promise<TopStoriesData> => {
  return fetch(`${path}?api-key=${NYC_API_KEY}`).then((res) => res.json());
};
