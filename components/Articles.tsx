import useArticle from "../lib/useArticle"
import styles from "../styles/Articles.module.scss"

const Articles = () => {
    const { articles, isLoading, isError } = useArticle('home');
    const convertDateString = (date: string): string => {
        let d: Date | string = new Date(Date.parse(date));
        const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
        d = d.toLocaleDateString('en-US', options);
        //console.log(d);
        return d;
    }

    let content;
    if (isError) content = <div>Error message</div>;
    if (isLoading) content = <div>Loading...</div>;
    if (articles){
        console.log(articles);
        content = articles.results.map((article: any) => {
            return <article key={article.short_url} className={styles.article}>
                <div>
                    <span className={styles.sectionTitle}>{article.section}</span>
                </div>
                <div>
                    <span>{convertDateString(article.published_date)}</span>
                </div>
                <h3>{article.title}</h3>
                <section>

                </section>
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