var express = require("express");
const server01 = express();
const server02 = express();
const server03 = express();

//Exercise 01
server01.use("", (req, res) =>{
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    res.write("Hello World");
    res.end()
})

server01.listen(3000, () =>{
    console.log("Server is running at 3000");
})


//Exercise 02
server02.get("/", (req, res) =>{
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    res.write("<h1>This is HomePage </h1>");
    res.end()
})

server02.get("/overview",(req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.write('<h1>This is overview page</h1>')
    res.end()
})

server02.get("/product",(req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.write('<h1>This is product page</h1>')
    res.end()
})

server02.listen(3010, ()=>{
    console.log("Server is running at 3010");
})


//Exercise 03
var router = require("./router/index");
server03.use("/api", router)

server03.listen(3020, ()=>{
    console.log("Server is running at 3020");
})