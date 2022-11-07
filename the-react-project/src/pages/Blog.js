import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArticles(response);
    }
    getArticles();
    setLoading(false);
  }, []);

  return (
    <section>
      <h1>BLOG</h1>
      <p>Berikut ini adalah tulisan tulisanku (tapi bo'ong):</p>

      {loading && <i>Loading articles...</i>}
      {!loading && (
        <div>
          {articles.map(function (article) {
            return (
              <article key={article.id}>
                <h3>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <time>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
