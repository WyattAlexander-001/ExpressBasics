const express = require("express");     
const app = express();
const path = require('path'); 

app.set('view engine', 'ejs'); //npm i ejs
app.set("views", path.join(__dirname, '/views')); 

app.get('/', (req, res) => {
    // res.send("Welcome to the home page!!!!!!");
    res.render('home'); //looks for views folder automatically
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num }); //call rand in ejs file
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { chosenReddit: subreddit });

});
app.listen(3000, () => {  
    console.log("Listening on port 3000");
});