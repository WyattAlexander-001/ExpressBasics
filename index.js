const express = require('express');
const app = express();
// console.dir(app);
// console.log("===================================");
// console.log(app.settings);

//Put in your Searchbar: localhost:3000/
const localHost = 7080;
app.listen(localHost, () => {
    console.log(`Server started on port ${localHost}`);
});

// Testing
// app.use(() => {  
//     console.log("Hurray!");
//     console.log('Time:', Date());
// });   

// app.use((req,res) => { 
//     console.log("We got a request");  
//     console.log('Time:', Date());
//     // res.send({color: 'red'})
//     res.send("<h1> Hello World </h1>");
// });  

//Routing get requests
// '/' Home page
app.get('/', (req, res) => {
    console.log("Home page");
});
// /about about page
app.get('/about', (req, res) => {
    console.log("About page");
});

//cats
app.get('/cats', (req, res) => {
    console.log("meow");
    res.send('MEOW!!');
});

//Mirroring the Reddit
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    console.log(subreddit);
    res.send(`<h1> Browsing the ${subreddit} subreddit </h1>`);
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("Hiiiii!");
});


//defaul case for error handling, keep on bottom
app.get('*', (req, res) => {
    console.log("404 IDK!");
    res.send('404 IDK!');
});

//Routing post requests
app.post('/cats', (req, res) => {
    //console.log("Post request to /cats");
    res.send('Post request TO /CATS!!');
});



