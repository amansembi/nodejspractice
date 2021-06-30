const http = require("http");
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf8");
const replaceVal = (tempVal, orgVal) => {
        var realTemp =  orgVal.main.temp - 273.15;
        var realTempMin = orgVal.main.temp_min - 273.15;
        var realTempMax =  orgVal.main.temp_max - 273.15;
    let temperature = tempVal.replace("{%tempval%}",realTemp.toFixed(2));
     temperature = temperature.replace("{%tempmin%}",realTempMin.toFixed(2));
     temperature = temperature.replace("{%tempmax%}",realTempMax.toFixed(2));
     temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    
    return temperature;
}
const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=sri ganganagar&appid=79246df07be87839d0783fab468d0f2c' )
        .on('data',  (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            //const realTimeData = arrData.map((val)=> replaceVal(homeFile,val)).join("");
           res.write(realTimeData);
          console.log(objData);
            })
        .on('end',  (err) => {
        if (err) return console.log('connection closed due to errors', err);
           res.end();
        });
    }
});
server.listen(8000,'127.0.0.1');