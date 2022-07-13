import useSWR from 'swr';
import { TOP_STORIES_PATH, NYC_API_KEY } from 'constants/global';
import { storiesFetcher } from 'service/storiesFetcher';

export const useArticles = (category = 'home') => {
  const { data, error } = useSWR(
    `${category}`,
    storiesFetcher.bind(
      null,
      `${TOP_STORIES_PATH}/${category}.json?api-key=${NYC_API_KEY}`
    )
  );

  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
};
