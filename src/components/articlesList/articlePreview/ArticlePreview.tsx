import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import type { Article } from 'models/Article';
import { convertDateString } from 'formatters/date';

import styles from './styles.module.scss';

type ArticleProps = {
    article: Article,
    isDesktop: boolean
}

export const ArticlePreview: FunctionComponent<ArticleProps> = ({ article, isDesktop }) => {
    return <article className={styles.article}>
        <section className={styles.content}>
            <div>
                <div className={styles.sectionWrapper}>
                    <div className={styles.sectionTitle}>
                        {article.section}
                    </div>
                    {!isDesktop ? <div className={styles.dateWrapper}>
                        {convertDateString(article.published_date)}
                    </div> : null}
                </div>
                <h4 className={styles.title}>
                    {article.title}
                </h4>
                <p className={styles.paragraph}>
                    {article.abstract}
                </p>
            </div>
            {isDesktop ? <div className={styles.dateWrapper}>
                {convertDateString(article.published_date)}
            </div> : null}
        </section>
        <div className={styles.imageWrapper}>
            <Image
                src={
                    article.multimedia
                        ? article.multimedia[1].url
                        : '/logo.svg'
                }
                alt={article.multimedia ? article.title : 'No image'}
                width={
                    article.multimedia ? article.multimedia[1].width : 129
                }
                height={
                    article.multimedia ? article.multimedia[1].height : 28
                }
                layout='responsive'
            />
        </div>
    </article>;
}