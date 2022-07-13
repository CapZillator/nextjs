import React, { FunctionComponent } from 'react';
import { NYC_MULTIMEDIA_URL_BASE } from 'constants/global';
import {
  DEFAULT_IMAGE_PATH,
  DEFAULT_IMAGE_ALT,
  DEFAULT_IMAGE_H,
  DEFAULT_IMAGE_W,
} from 'constants/ui';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useArticleSearch } from 'hooks/useArticleSearch';
import { convertDateString } from 'formatters/date';

import styles from './styles.module.scss';

export const Article: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const artID = typeof id === 'string' ? id : '';

  const { searchResult, isLoading, isError, isFound } = useArticleSearch(artID);

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
      <div className={styles.articleHead}>
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
          alt={artID ?? DEFAULT_IMAGE_ALT}
          width={
            searchResult.response.docs[0].multimedia[0]
              ? searchResult.response.docs[0].multimedia[0].width
              : DEFAULT_IMAGE_W
          }
          height={
            searchResult.response.docs[0].multimedia[0]
              ? searchResult.response.docs[0].multimedia[0].height
              : DEFAULT_IMAGE_H
          }
          layout="responsive"
        />
      </div>
      <section>
        <h2 className={styles.contentHeader}>
          {searchResult.response.docs[0].headline.main}
        </h2>
        <p className={styles.paragraph}>
          {searchResult.response.docs[0].abstract}
        </p>
      </section>
    </article>
  );
};
