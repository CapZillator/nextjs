import React from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { unstable_serialize } from 'swr';
import { articleFetcher } from 'service/articlesFetcher';
import { Article } from 'components/article/Article';

export const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const articleId = unstable_serialize(id);

  return <Article id={articleId} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = unstable_serialize(context.query.id);
    const article = await articleFetcher(id);

    if (!article) {
      return { notFound: true };
    }

    return {
      props: {
        fallback: {
          [id]: article,
        },
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default ArticlePage;
