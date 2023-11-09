const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); //parse request body
app.use(express.json()); //parse request body
/*
//example JSON post request body on hopscotch
{
  "meat": "pork",
  "qty": 2
}
*/

//You get two different respones from hopscotch
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response!!');
});

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Here is your: [${qty}] [${meat}] taco(s)!`);
});

app.listen(3000, () => console.log('Server started at port 3000'));