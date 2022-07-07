import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

/* Return the parser state flag (isLoading), articles if succeed and error if not. */
const useArticle = (sectionTitle: string) => {
    const apiKey = process.env.API_KEY
    const { data, error } = useSWR(`https://api.nytimes.com/svc/topstories/v2/${sectionTitle}.json?api-key=${apiKey}`, fetcher)

    return {
        articles: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useArticle