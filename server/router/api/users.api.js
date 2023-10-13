

var express = require("express");
var fs = require("fs");
var path = require("path");
var BodyParser = require("body-parser");


var router = express.Router();

router.get("/",(req, res)=>{
    let users = fs.readFileSync(path.join(__dirname, "users.json"), "utf-8");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(users);
    res.end();
})

router.get("/:id", (req, res) =>{
    const userID = req.params.id;
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json"), "utf-8"));
    const userFind = users.find(user => user._id == userID)
    res.writeHead(200, {
        "Content-Type" : "application/json"
    }) 
    res.write(JSON.stringify(userFind))
    res.end();
})

router.post('/', BodyParser.json(), (req, res) =>{
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json"), "utf-8"));
    let newUser = {
        _id: Math.random() * Date.now(),
        ...req.body
    }
    users.push(newUser);
    fs.writeFileSync(path.join(__dirname,"users.json"), JSON.stringify(users));
    res.end()
})

router.put("/:id", BodyParser.json(), (req,res) =>{
    let users = JSON.parse(fs.readFileSync(path.join(__dirname,'users.json'),'utf-8'))
    let userID = Number(req.params.id);
    users.map(user =>{
        if(user._id== userID){
            return req.body
        }
        else{
            return user
        }
    })
    fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(users));
    res.end();
})

router.delete("/:id",(req,res) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname,'users.json'),'utf-8'))
    let userID = Number(req.params.id)
    let newUserList = users.filter(user => user._id != userID)
    fs.writeFileSync(path.join(__dirname,'users.json'),JSON.stringify(newUserList))
    res.end()
})

module.exports = router;