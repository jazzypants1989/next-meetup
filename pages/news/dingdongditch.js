import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsItem = router.query.newsItem;

  // send a request to the backend API
  // to fetch the news item with newsItem

  fetch("https://nextjs-course-4f3e8-default-rtdb.firebaseio.com/news.json")
    .then((response) => response.json())
    .then((data) => {
      const newsArray = [];
      for (const key in data) {
        newsArray.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      setLoadedNews(newsArray);
    });

  return (
    <ul>
      {loadedNews.map((newsItem) => (
        <li key={newsItem.id}>{newsItem.title}</li>
      ))}
    </ul>
  );
};
export default DetailPage;
