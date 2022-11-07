import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  console.log(params);
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      const response = await request.json();

      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, []);

  return (
    <section>
      <h1>BLOG DETAIL</h1>
    </section>
  );
}
