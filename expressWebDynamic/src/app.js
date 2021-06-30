const express = require("express");
const app = express();
const port = process.env.port || 8000;

app.get("/", (req, res)=>{
    res.send("Welcome to aman channel");
});
app.get("/about", (req, res)=>{
    res.send("Welcome to aman channel");
});
app.get("/weather", (req, res)=>{
    res.send("Welcome to aman channel");
});
app.get("*", (req, res)=>{
    res.send("404 opps page note found");
});
app.listen(port, ()=>{
    console.log(`My port is start with number: ${port}`);
});