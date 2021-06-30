const fs = require("fs");
//fs.writeFile("read.txt","today is my awesome",(err) =>{
  //  console.log('File is created');
//});
fs.readFile("read.txt","utf8",(err,data)=>{
    console.log(data);
});