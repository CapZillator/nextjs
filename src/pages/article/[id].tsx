function Article() {
  return (
    <article>
      <h2>Single dynamic article</h2>
      <p>Lorum ipselum bla-bla...</p>
    </article>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  return {
    paths: [
      // String variant:
      'first-post',
      // Object variant:
      { params: { slug: 'second-post' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(params: any) {
  console.log(params);
  // Fetch necessary data for the blog post using params.id
}

export default Article;
