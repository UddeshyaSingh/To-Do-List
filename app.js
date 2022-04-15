
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


let tasks = [];
let date = new Date();
let today = (""+date).slice(0,15);


app.get("/",function(req,res){
  res.render("index",{today: today, tasks: tasks});
});

app.post("/",function(req,res){
  let task = req.body.task;
  tasks.push(task);
  res.redirect("/");
  console.log(task);
});

app.get("/clock",function(req,res){
  let dates = new Date();
  let hours = dates.getHours();
  let minutes = dates.getMinutes();
  let time = hours +":"+minutes;
  console.log(time);
  res.send(time);
  for(var i = 0; i > -1; i++)
  res.reload();
});

app.post("/clock",function(req,res){
  req.redirect("/clock");
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
  console.log(today);
});
