import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if(!request.ok) {
            setLoading(false);
            return setNotFound(true);
        }

        const response = await request.json();

        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if(notFound) {
    return <h1>Artikel tidak ditemukan :(</h1>
  }

  return (
    <section>
      {loading ? (
        <i>Loading article...</i>
      ) : (
        <article>
          <h2>{article.title}</h2>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <br />
          <br />
          <img src={article.imageUrl} alt={article.title} width={700} />
          <p>{article.summary}</p>
          <p>
            Source:{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
