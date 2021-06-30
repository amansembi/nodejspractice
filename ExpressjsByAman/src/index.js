
const express = require('express');
const path = require('path');
const requests = require('requests');
const hbs= require('hbs');
const app = express();
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

//builtin middleware

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
app.get("/", (req, res)=>{
    res.render("index", {
        Home: "Home",
        Intro: "About us",
        Features: "Portfolio",
        loginUser: "Contact us",
        
    });
});
const pre = 4040;
app.get("/temp", (req, res) =>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=79246df07be87839d0783fab468d0f2c` )
         .on('data',  (chunk) => {
            const objData = JSON.parse(chunk);
           const arrData = [objData];
           const result = `My search city name is ${arrData[0].name} and temprature is: ${arrData[0].main.temp}`;
    res.render("temp", {
        temprature:result,
    })
    
    });
});



app.get("/about", (req, res)=>{
    res.send("Hello on about page");
});
app.get("/weather", (req, res)=>{
    res.render("weather",{
        Home: "Home",
        Intro: "About us",
        Features: "Portfolio",
        loginUser: "Contact us",
        SearchActionName:"Search",
    });
});
app.get('*', (req, res)=>{
    res.render("404",{
        Home: "Home",
        Intro: "About us",
        Features: "Portfolio",
        loginUser: "Contact us",
        errorcomemnt:"Opps this page is not found! sorry"
        
    });
});




app.listen(8000,()=>{
console.log("Listing post 8000 by aman");
});

