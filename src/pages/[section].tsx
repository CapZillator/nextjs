import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { unstable_serialize } from 'swr';
import { articlesFetcher } from 'service/articlesFetcher';
import { ArticlesList } from 'components/articles-list/ArticlesList';

export const Section: NextPage = () => {
  const router = useRouter();
  const { section } = router.query;
  const articleSection = unstable_serialize(section);

  return <ArticlesList section={articleSection} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const section = unstable_serialize(context.query.section);
    const articles = await articlesFetcher(section);

    if (!articles) {
      return { notFound: true };
    }

    return {
      props: {
        fallback: {
          [section]: articles,
        },
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Section;
