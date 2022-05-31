import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import { Form } from "./components/Form";
import { NewsList } from "./components/NewsList";

function App() {
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=93defc1cd3044eb5bf474bb31b7e552b`;
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
  }
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, [category]);

  return (
    <Fragment>
      <Header
        title="Hello World"
      />
      <div className="container">
        <Form
          title="Form"
          setCategory={setCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
