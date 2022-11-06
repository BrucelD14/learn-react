import { useEffect, useState } from "react";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = request.json();

      setArticles(response);
      console.log(response);
    }

    getArticles();
  }, []);

  return <h1>BLOG PAGE</h1>;
}
