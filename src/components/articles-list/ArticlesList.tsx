import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { MEDIA_QUERY_DESKTOP } from 'constants/ui';
import type { Article as ArticleModel } from 'models/Article';
import { useArticles } from 'hooks/useArticles';
import { useMediaQuerySSR } from 'hooks/useMediaQuerySSR';
import { ArticlePreview } from './article-preview/ArticlePreview';

import styles from './styles.module.scss';

type ArticlesListProps = {
  section: string;
};

export const ArticlesList: FunctionComponent<ArticlesListProps> = ({
  section,
}) => {
  const isDesktop = useMediaQuerySSR(MEDIA_QUERY_DESKTOP);
  const { articles, isLoading, isError } = useArticles(section);

  if (isError) {
    return <div className={styles.errorMessage}>Error message</div>;
  }

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (articles && !Array.isArray(articles.results)) {
    return <div className={styles.errorMessage}>Not found</div>;
  }

  return (
    <>
      {articles?.results?.map((article: ArticleModel, i: number) => {
        return (
          <Link
            key={`${section}_${i}`}
            href={`/article/${article.uri.split('/').pop()}`}
            passHref
          >
            <a>
              <ArticlePreview
                article={article}
                isDesktop={isDesktop}
                section={section}
              />
            </a>
          </Link>
        );
      })}
    </>
  );
};
