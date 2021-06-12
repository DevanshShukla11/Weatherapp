const express = require ("express");
const path = require("path");
const app = express();
//const hbs = require("hbs");
//const port = 8000;
const port = process.env.PORT || 8000 ;

app.use(express.static("public"));

//const template_path = path.join(__dirname , "templates//views");
//const partialsPath= path.join(__dirname , "templates//partials");
app.set('view engine' , "hbs");
//app.set('views' , template_path);
//hbs.registerPartial(partialsPath);
app.get("/" , (req , res)=> 
{
    res.render("index")
})
app.get("/about" , (req , res)=> 
{
    res.render("about")
})
app.get("/weather" , (req , res)=> 
{
    res.render("weather")
})
app.get("*" , (req , res)=> 
{
    res.send("404error")
})
app.listen( port , ()=>{
    console.log(`listening on ${port}`);
})
