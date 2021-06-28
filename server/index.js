const express =require('express');
const app=express();
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const dotenv = require("dotenv");

const authRoute = require("./route/auth");
const usersRoute=require("./route/users");
const postRoute = require("./route/posts");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("SuccessFully Connected to MongoDB");
  }
);

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts", postRoute);

app.listen(8800,()=>{
    console.log("app is running on 8800 port")
})
















//cloud mongodb
//mongodb+srv://SocialApp:Ujjwal@123@ujjuapp.k9hdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


//local mongodb
//mongodb://practice:123@localhost:27017/practiceApp