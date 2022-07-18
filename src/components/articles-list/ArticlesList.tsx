import React, { FunctionComponent, useState, useEffect } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import { MEDIA_QUERY_DESKTOP } from 'constants/ui';
import type { Article as ArticleModel } from 'models/Article';
import { useArticles } from 'hooks/useArticles';
import { ArticlePreview } from './article-preview/ArticlePreview';

import styles from './styles.module.scss';

export const ArticlesList: FunctionComponent = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const isDesktopMediaQuery = useMediaQuery(MEDIA_QUERY_DESKTOP);
  const { articles, isLoading, isError } = useArticles('home');

  useEffect(() => setIsDesktop(isDesktopMediaQuery), [isDesktopMediaQuery]);

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
            passHref
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
