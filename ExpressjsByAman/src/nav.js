const express = require('express');
const app = express();
app.get("/", (req, res)=>{
    res.send("Hello nav on home page");
});
app.get("/about", (req, res)=>{
    res.send("Hello nav on about page");
});
app.get("/contact", (req, res)=>{
    res.send("Hello nav on contact page");
});
app.get("/temp", (req, res)=>{
    res.send("Hello nav on temp page");
});
app.listen(8000,()=>{
    console.log("Listing post 8000 by aman");
    });