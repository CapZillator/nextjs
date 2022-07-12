import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useArticleSearch } from 'hooks/useArticleSearch';
import { convertDateString } from 'formatters/date';

import styles from './styles.module.scss';

export const Article: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const artID = typeof id === 'string' ? id : '';

  const { searchResult, isLoading, isError, isFound } = useArticleSearch(
    'home',
    artID
  );

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
      <div className={styles.articleHeadWrapper}>
        <div>
          <span className={styles.sectionHeader}>
            {searchResult.response.docs[0].section_name}
          </span>
        </div>
        <div>
          <span>
            {convertDateString(searchResult.response.docs[0].pub_date)}
          </span>
        </div>
      </div>
      <div>
        <Image
          src={
            searchResult.response.docs[0].multimedia[0]
              ? `https://static01.nyt.com/${searchResult.response.docs[0].multimedia[0].url}`
              : '/logo.svg'
          }
          alt={artID}
          width={
            searchResult.response.docs[0].multimedia[0]
              ? searchResult.response.docs[0].multimedia[0].width
              : 129
          }
          height={
            searchResult.response.docs[0].multimedia[0]
              ? searchResult.response.docs[0].multimedia[0].height
              : 28
          }
        />
      </div>
      <section>
        <h2 className={styles.mainArticleHeader}>
          {searchResult.response.docs[0].headline.main}
        </h2>
        <p className={styles.articleParagraph}>
          {searchResult.response.docs[0].lead_paragraph}
        </p>
      </section>
    </article>
  );
};
