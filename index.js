const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended :true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {    
        id : "1a",
        username : "siddhigavhane",
        content  : "I Love Coding",
    },
    {
        id : "2b",
        username : "prasadhase",
        content  : "I got my first internship",
    },
    {

        id : "3c",
        username : "duduhase",
        content  : "dudu loves bubu",
    },
];
app.get("/posts",(req,res) =>{
    res.render("index.ejs",{posts})

});

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs")

});

app.post("/posts",(req,res) =>{
   let {username,content} = req.body;
   posts.push({username,content});
   res.redirect("/posts");

});

app.get("/posts/:id",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
   
  
});

app.listen(port , () =>{
    console.log("Listening to the port : 8080");
});