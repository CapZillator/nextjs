import { apiPath } from '@/constants/global'
import type { ArticleResponse } from '@/models/Article'

const apiKey = process.env.API_KEY

export const fetchArticlesData = async (): Promise<ArticleResponse> => {
    const url = `${apiPath}home.json?api-key=${apiKey}`
    return fetch(url).then(res => res.json());
}