import { BASE_URL_PATH } from '@/constants/global';

import useSWR from 'swr';

import { storiesFetcher } from '@/service/storiesFetcher';

export const useArticles = (sectionTitle?: string) => {
    const key = `${BASE_URL_PATH}/${sectionTitle}`;

    const { data, error } = useSWR(key, storiesFetcher);

    return {
        articles: data,
        isLoading: !error && !data,
        isError: error
    };
};