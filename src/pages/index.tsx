import type { NextPage } from 'next';
import { SWRConfig, SWRConfiguration } from 'swr';
import { ArticlesList } from 'components/articles-list/ArticlesList';
import { articlesFetcher } from 'service/articlesFetcher';

export const Home: NextPage<SWRConfiguration> = ({ fallback }) => {
  return <SWRConfig value={{ fallback }}>
    <ArticlesList />
  </SWRConfig>;
};

export async function getServerSideProps() {
  const articles = await articlesFetcher('home');

  return {
    props: {
      fallback: {
        'home': articles
      }
    }
  }
}

export default Home;
