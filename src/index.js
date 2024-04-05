const express = require("express")
const app = express()
const path = require("path");
const hbs = require("hbs");
const { collection } = require("./mongodb");
app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use(express.static('public'))


const tempelatePath = path.join(__dirname, '../tempelate')

app.use(express.json())
app.set('view engine', 'hbs');
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, resp) => {
    resp.render('blog');
    
});
app.get("/login", (req, resp) => {
    resp.render('login');
    
});
app.get("/signup", (req, resp) => {
    resp.render('signup');
});
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        user: req.body.user,
        password: req.body.password
    }
    await collection.insertMany([data]);
    res.render("blogs");

});
app.post("/blogs", async (req, res) => {
    const data = {
        name: req.body.yourname,
        Email: req.body.email,
        Subject: req.body.subject,
       Message: req.body.message
    }
    await collection.insertMany([data]);
    res.render("blogs")

});
app.post("/login", async(req,res)=>{
    try{
        const check=await collection.findOne({user:req.body.user})
        if(check.password==req.body.password){
            res.render("blogs")
        }
        else{
            res.send("wrong password")
        }
        }
    
    catch{
        res.send("wrong details")
    }
})
app.listen(5000);