import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import {
  DEFAULT_IMAGE_PATH,
  DEFAULT_IMAGE_ALT,
  DEFAULT_IMAGE_H,
  DEFAULT_IMAGE_W,
} from 'constants/ui';
import type { Article } from 'models/Article';
import { convertDateString } from 'formatters/date';

import styles from './styles.module.scss';

type ArticleProps = {
  article: Article;
  isDesktop: boolean;
};

export const ArticlePreview: FunctionComponent<ArticleProps> = ({
  article,
  isDesktop,
}) => {
  return (
    <article className={styles.article}>
      <section className={styles.content}>
        <div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>{article.section}</div>
            {!isDesktop ? (
              <div className={styles.date}>
                {convertDateString(article.published_date)}
              </div>
            ) : null}
          </div>
          <h4 className={styles.title}>{article.title}</h4>
          <p className={styles.paragraph}>{article.abstract}</p>
        </div>
        {isDesktop ? (
          <div className={styles.date}>
            {convertDateString(article.published_date)}
          </div>
        ) : null}
      </section>
      <div className={styles.image}>
        <Image
          src={article?.multimedia?.[1].url ?? DEFAULT_IMAGE_PATH}
          alt={article.title ?? DEFAULT_IMAGE_ALT}
          width={article?.multimedia?.[1].width ?? DEFAULT_IMAGE_W}
          height={article?.multimedia?.[1].height ?? DEFAULT_IMAGE_H}
          layout="responsive"
        />
      </div>
    </article>
  );
};
