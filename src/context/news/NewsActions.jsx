export const fetchNews = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=2024-05-27&sortBy=publishedAt&apiKey=2eb81450afc3448292589ceba954791e`
  );
  const data = await response.json();
  return data.articles;
};

