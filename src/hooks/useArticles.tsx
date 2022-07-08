import useSWR from 'swr'
import { fetchArticlesData } from '../service/fetch'

export const useArticles = (sectionTitle?: string) => {
    const key = `https://api.nytimes.com/svc/topstories/v2/${sectionTitle}`
    const { data, error } = useSWR(key, fetchArticlesData)

    return {
        articles: data,
        isLoading: !error && !data,
        isError: error
    }
}