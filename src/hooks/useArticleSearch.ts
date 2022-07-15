import useSWR from 'swr';
import { articleFetcher } from 'service/articlesFetcher';

export const useArticleSearch = (id: string) => {
  const { data, error } = useSWR(id, articleFetcher);

  return {
    searchResult: data,
    isLoading: !error && !data,
    isError: error,
    isFound:
      data?.response?.docs && data.response.docs.length > 0 ? true : false,
  };
};
