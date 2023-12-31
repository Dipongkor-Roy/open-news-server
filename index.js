const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const news = require("./Data/news.json");
app.use(cors());

const categories = require("./Data/Categories.json");
app.get("/", (req, res) => {
  res.send("News Api Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "8") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});
app.get('/news',(req,res)=>{
  res.send(news);
})
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.listen(port, () => {
  console.log("open news running in port", port);
});
