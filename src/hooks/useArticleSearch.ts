import useSWR from 'swr';
import {
  BASE_URL_PATH,
  ARTICLE_SEARCH_PATH,
  NYC_ARTICLE_PATH,
  NYC_API_KEY,
} from 'constants/global';
import { storiesFetcher } from 'service/storiesFetcher';

export const useArticleSearch = (category = 'home', header: string) => {
  const { data, error } = useSWR(
    `${BASE_URL_PATH}/${category}/${header}`,
    storiesFetcher.bind(
      null,
      `${BASE_URL_PATH}${ARTICLE_SEARCH_PATH}.json?q=${category}&fq=uri:("${NYC_ARTICLE_PATH}${header}")&api-key=${NYC_API_KEY}`
    )
  );

  const isFound =
    data?.response?.docs && data.response.docs.length > 0 ? true : false;

  return {
    searchResult: data,
    isLoading: !error && !data,
    isError: error,
    isFound: isFound,
  };
};
