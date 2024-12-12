const express=require("express");
const cors=require("cors");
const Signup = require("../server/model/signup")
const userRoute =require("./Routes/userRoutes")
const { default:mongoose} = require("mongoose");
const app = express()
mongoose
.connect("mongodb://localhost:27017/")
.then(()=> console.log("mongodb connected successfully"))
.catch((error)=> console.log(error))
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
});
app.use('/user',userRoute)

app.listen(4000,()=>{
    console.log("server is running")
})