const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

app.post("/analytics", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
  });
  

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
});