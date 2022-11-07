import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );
        const response = await request.json();

        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  return (
    <section>
      {loading && <i>Loading article...</i>}
      <h2>{article.title}</h2>
      <date>{new Date(article.publishedAt).toLocaleDateString()}</date>
      <p>{article.summary}</p>
      <p>
        Source:{" "}
        <a href={article.url} target="_blank">
          {article.newsSite}
        </a>
      </p>
    </section>
  );
}
