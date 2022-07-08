import React, { FunctionComponent } from 'react';

import { useArticles } from '@/hooks/useArticles';

import Head from 'next/head';
import Image from 'next/image';

import { convertDateString } from "@/utils/convertDateString";
import type { Article } from '@/models/Article';

import styles from "./styles.module.scss";
//import globalStyles from '@/styles/index.module.scss';

/* Return list of articles */
export const ArticlesList: FunctionComponent = () => {
    const { articles, isLoading, isError } = useArticles('home');//Get articles

    if (isError) {
        return <div className={styles.errorMessage}>Error message</div>;
    };

    if (isLoading) {
        return <div className={styles.loader}>Loading...</div>;
    };

    if (!articles) {
        return <div className={styles.errorMessage}>Error message</div>;
    };

    //<Image src={article.multimedia[1].url} alt={article.title} width={article.multimedia[1].width} height={article.multimedia[1].height} />

    return <>
        {articles?.results.map((article: Article) => {
            return <article key={article.short_url} className={styles.article}>
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
                </div>
            </article>;
        })}
    </>;
};