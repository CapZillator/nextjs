import Image from 'next/image'
import useArticle from "../lib/useArticle"
import styles from "../styles/Articles.module.scss"
import { convertDateString } from "../lib/utils"

/* Return list of articles by incoming category */
function Articles({category = 'home'}) {
    const { articles, isLoading, isError } = useArticle(category);//Get articles
    
    let content;
    if (isError) content = <div className={styles.errorMessage}>Error message</div>;
    if (isLoading) content = <div className={styles.loader}>Loading...</div>;
    if (articles){
        console.log(articles);
        content = articles.results.map((article: any) => {
            return <article key={article.short_url} className={styles.article}>
                <div className={styles.sectionWrapper}>
                    <span className={styles.sectionTitle}>{article.section}</span>
                </div>
                <div className={styles.dateWrapper}>
                    <span>{convertDateString(article.published_date)}</span>
                </div>
                <h3 className={styles.titleWrapper}>{article.title}</h3>
                <section className={styles.bodyWrapper}>
                    <p>{article.title}</p>
                </section>
                <div className={styles.imageWrapper}>
                    <Image src={article.multimedia[1].url} alt={article.title} width={article.multimedia[1].width} height={article.multimedia[1].height}/>
                </div> 
            </article>;
        });
    }
    return (
        <>
        {content}
        </>
    )
}

export default Articles