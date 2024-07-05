import articles from "../../articles.json";

const getArticle = async (id: any) => {
  return articles[id];
};

const Article = async (params: any) => {
  const result = await getArticle(params.params.id);

  console.log("search", result);

  return (
    <div>
      <h1>{result?.title}</h1>
      <b>{result?.brief}</b>
      <p>{result?.content}</p>
    </div>
  );
};

export default Article;
