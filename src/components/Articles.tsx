import Image from 'next/image'
import useArticle from "../lib/useArticle"
import styles from "../styles/Articles.module.scss"
import { convertDateString } from "../lib/utils"
import Link from 'next/link'
import { useRouter } from 'next/router'

/* Return list of articles by incoming category */
function Articles({category = 'home'}) {
    const { articles, isLoading, isError } = useArticle(category);//Get articles
    const router = useRouter()
    
    let content;
    if (isError) content = <div className={styles.errorMessage}>Error message</div>;
    if (isLoading) content = <div className={styles.loader}>Loading...</div>;
    if (articles){
        console.log(articles);
        content = articles.results.map((article: any) => {
            return <article key={article.short_url} className={styles.article} onClick={() => router.push('/article')}>
                <div className={styles.sectionWrapper}>
                    <span className={styles.sectionTitle}>{article.section}</span>
                </div>
                <div className={styles.dateWrapper}>
                    <span>{convertDateString(article.published_date)}</span>
                </div>
                <Link href="/article">
                    <h3 className={styles.titleWrapper}>{article.title}</h3>
                </Link>
                <section className={styles.bodyWrapper}>
                    <p>{article.abstract}</p>
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