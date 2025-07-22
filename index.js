
require("dotenv").config()
// import "dotenv/config"
const express =  require('express');

const app = express();

const port = 4000;

const Jsondata = {
"employee":{"name":"John", "age":30, "city":"New York"}
}
console.log(process.env.PORT)
app.get("/",(req,res) => {
    res.send("Hello World");
})

app.get("/login",(req,res) => {
    res.send("Login Page is here")
})

app.get("/author",(req,res) => {
    res.send("The author is Sahil Islam")
})

app.get("/heading",(req,res) => {
    res.send("<h1>The Heading</h1>")
})

app.get("/data", (req,res) => {
    res.send(Jsondata)
})

app.listen(process.env.PORT, () => {
    console.log(`The app is Listening on port ${process.env.PORT}`)
})