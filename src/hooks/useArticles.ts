import useSWR from 'swr';
import { articlesFetcher } from 'service/articlesFetcher';

export const useArticles = (category = 'home') => {
  const { data, error } = useSWR(category, articlesFetcher);

  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
};
