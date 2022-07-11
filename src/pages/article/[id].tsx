import articleStyles from '@/styles/Article.module.scss';

function Article() {
  return (
    <article className={articleStyles.article}>
      <h2>Single article</h2>
      <p>Lorum ipselum bla-bla...</p>
    </article>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps(params: any) {
  console.log(params);
  // Fetch necessary data for the blog post using params.id
}

export default Article;
