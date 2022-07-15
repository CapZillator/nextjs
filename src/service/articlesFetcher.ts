import {
  TOP_STORIES_PATH,
  ARTICLE_SEARCH_PATH,
  NYC_ARTICLE_PATH,
  NYC_API_KEY,
} from 'constants/global';

export const articlesFetcher = async (category: string) => {
  return fetch(
    `${TOP_STORIES_PATH}/${category}.json?api-key=${NYC_API_KEY}`
  ).then((res) => res.json());
};

export const articleFetcher = async (id: string) => {
  return fetch(
    `${ARTICLE_SEARCH_PATH}.json?fq=uri:("${NYC_ARTICLE_PATH}/${id}")&api-key=${NYC_API_KEY}`
  ).then((res) => res.json());
};
