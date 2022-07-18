import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { NYC_MULTIMEDIA_URL_BASE } from 'constants/global';
import {
  DEFAULT_IMAGE_PATH,
  DEFAULT_IMAGE_ALT,
  DEFAULT_IMAGE_H,
  DEFAULT_IMAGE_W,
} from 'constants/ui';
import { useArticleSearch } from 'hooks/useArticleSearch';
import { convertDateString } from 'formatters/date';

import styles from './styles.module.scss';

type ArticleProps = {
  id: string;
};

export const Article: FunctionComponent<ArticleProps> = ({ id }) => {
  const { searchResult, isLoading, isError, isFound } = useArticleSearch(id);

  if (isError) {
    return <div className={styles.errorMessage}>Error message</div>;
  }

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (!isFound) {
    return <div className={styles.errorMessage}>Not found</div>;
  }

  return (
    <article className={styles.article}>
      <div className={styles.head}>
        <div className={styles.sectionHeader}>
          {searchResult.response.docs[0].section_name}
        </div>
        <div className={styles.pubDate}>
          {convertDateString(searchResult.response.docs[0].pub_date)}
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={
            searchResult.response.docs[0].multimedia[0]
              ? `${NYC_MULTIMEDIA_URL_BASE}/${searchResult.response.docs[0].multimedia[0].url}`
              : DEFAULT_IMAGE_PATH
          }
          alt={id ?? DEFAULT_IMAGE_ALT}
          width={
            searchResult?.response?.docs?.[0].multimedia?.[0]?.width ??
            DEFAULT_IMAGE_W
          }
          height={
            searchResult?.response?.docs?.[0].multimedia?.[0]?.height ??
            DEFAULT_IMAGE_H
          }
          layout="responsive"
          placeholder="blur"
          blurDataURL={
            searchResult.response.docs[0].multimedia[0]
              ? `${NYC_MULTIMEDIA_URL_BASE}/${searchResult.response.docs[0].multimedia[0].url}`
              : DEFAULT_IMAGE_PATH
          }
        />
      </div>
      <section>
        <h2 className={styles.contentHeader}>
          {searchResult.response.docs[0].headline.main}
        </h2>
        <blockquote className={styles.quotation}>
          &ldquo;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...&rdquo;
        </blockquote>
        <p className={styles.paragraph}>
          {searchResult.response.docs[0].abstract}
        </p>
      </section>
    </article>
  );
};
