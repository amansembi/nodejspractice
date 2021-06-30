const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    if(req.url =='/'){
        res.end('This is home page');
    }else if(req.url == '/about'){
        res.end('This is about page');
    
    }else if(req.url == '/userapi'){
        fs.readFile(`${__dirname}/userAPI/userapi.json`,"utf8",(err,data)=>{           
             const objData = JSON.parse(data);
             
             res.end(objData.users[0].name);
        
         });
       // res.end(`${__dirname}`);
        //res.end('This is userAPI page');
    }
    else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end('<h1>404 ERROR! Page not found</h1>');
    }
    
});
server.listen(8000,"127.0.0.1",()=>{
    console.log('Web running 8000');
});