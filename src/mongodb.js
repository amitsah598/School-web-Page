const { ALL } = require("dns");
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/loginsignuptutorial")

.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("signupdata",logInSchema);
const dataSchema=new mongoose.Schema({
    yourname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const collectio=new mongoose.model("data",dataSchema);
module.exports=collectio

module.exports=collection