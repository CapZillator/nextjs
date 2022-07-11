import React, { FunctionComponent } from 'react';

import Image from 'next/image';

import type { Article } from '@/models/Article';

import { useArticles } from '@/hooks/useArticles';

import { convertDateString } from '@/utils/convertDateString';

import styles from './styles.module.scss';

/* Return list of articles */
export const ArticlesList: FunctionComponent = () => {
  const { articles, isLoading, isError } = useArticles('home'); //Get articles

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
      {articles?.results?.map((article: Article) => {
        return (
          <article key={article.short_url} className={styles.article}>
            <div className={styles.sectionWrapper}>
              <span className={styles.sectionTitle}>{article.section}</span>
            </div>
            <div className={styles.dateWrapper}>
              <span>{convertDateString(article.published_date)}</span>
            </div>
            <h3 className={styles.titleWrapper}>{article.title}</h3>
            <section className={styles.bodyWrapper}>
              <p>{article.abstract}</p>
            </section>
            <div className={styles.imageWrapper}>
              <Image
                src={
                  article.multimedia ? article.multimedia[1].url : '/logo.svg'
                }
                alt={article.multimedia ? article.title : 'No image'}
                width={article.multimedia ? article.multimedia[1].width : 129}
                height={article.multimedia ? article.multimedia[1].height : 28}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};
