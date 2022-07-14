import React, { FunctionComponent } from 'react';
<<<<<<< HEAD
import Link from 'next/link';
=======
import { MEDIA_QUERY_DESKTOP } from 'constants/ui';
>>>>>>> workflow3
import type { Article as ArticleModel } from 'models/Article';
import { useMediaQuery } from 'usehooks-ts';
import { useArticles } from 'hooks/useArticles';
import { ArticlePreview } from './article-preview/ArticlePreview';

import styles from './styles.module.scss';

/* Return list of articles */
export const ArticlesList: FunctionComponent = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERY_DESKTOP);
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
          <Link
            key={article.short_url}
            href={`/article/${article.uri.split('/').pop()}`}
          >
            <a>
              <ArticlePreview article={article} isDesktop={isDesktop} />
            </a>
          </Link>
        );
      })}
    </>
  );
};
