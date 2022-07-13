import type { NextPage } from 'next';
import { ArticlesList } from 'components/articles-list/ArticlesList';

export const Home: NextPage = () => {
  return <ArticlesList />;
};

export default Home;
