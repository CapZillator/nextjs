import React, { FunctionComponent } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import type { Article as ArticleModel } from 'models/Article';
import { useArticles } from 'hooks/useArticles';
import { ArticlePreview } from './article-preview/ArticlePreview';

import styles from './styles.module.scss';

/* Return list of articles */
export const ArticlesList: FunctionComponent = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { articles, isLoading, isError } = useArticles('home');

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
      {articles?.results?.map((article: ArticleModel) => {
        return (
          <ArticlePreview
            key={article.short_url}
            article={article}
            isDesktop={isDesktop}
          />
        );
      })}
    </>
  );
};
