import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { ArticlesList } from 'components/articles-list/ArticlesList';
import { articlesFetcher } from 'service/articlesFetcher';

export const Home: NextPage = () => {
  return <ArticlesList />;
};


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const articles = await articlesFetcher('home');

    if (!articles) {
      return { notFound: true };
    }

    return {
      props: {
        fallback: {
          'home': articles
        }
      }
    };
  } catch (e) {
    return { notFound: true };
  };
  
}

export default Home;
