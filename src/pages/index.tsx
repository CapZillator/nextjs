import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { articlesFetcher } from 'service/articlesFetcher';
import { ArticlesList } from 'components/articles-list/ArticlesList';

export const Home: NextPage = () => {
  return <ArticlesList section={'home'} />;
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
          'home': articles,
        },
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Home;
