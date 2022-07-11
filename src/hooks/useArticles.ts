import useSWR from 'swr';

import { BASE_URL_PATH } from '@/constants/global';

import { storiesFetcher } from '@/service/storiesFetcher';

export const useArticles = (category = 'home') => {
  const key = `${BASE_URL_PATH}/${category}`;

  const { data, error } = useSWR(key, storiesFetcher);

  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
};
