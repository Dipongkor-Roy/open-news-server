const express = require("express");
const app = express();
const cors=require('cors')
const port =9000;

app.use(cors());

const categories=require('./Data/Categories.json')
app.get('/', (req, res) => {
  res.send("News Api Running");
});

app.get('/news-categories',(req,res)=>{
    res.send(categories)
})
app.listen(port, () => {
  console.log("open news running in port", port);
});
