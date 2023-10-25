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

// app.use(() => {  
//     console.log("Hurray!");
//     console.log('Time:', Date());
// });   

app.use((req,res) => { 
    console.log("We got a request");  
    console.log('Time:', Date());
    // res.send({color: 'red'})
    res.send("<h1> Hello World </h1>");
});  
