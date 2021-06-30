const fs = require("fs");
const bioData = {
    name:"Amrinder singh",
    age:30,
    channel:"New node js "
};
//console.log(bioData.age);
const jsonData = JSON.stringify(bioData);
//console.log(jsonData);
//const onData = JSON.parse(jsonData);
//console.log(onData.channel);
fs.writeFile("json1.json", jsonData,(err)=>{
    console.log("DONE");
});
fs.readFile("json1.json", "utf8", (err,data)=>{
    const fileData = JSON.parse(data);
    console.log(data);
    console.log(fileData);
});