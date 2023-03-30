const express = require("express");
const app = express();
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const helmet =require("helmet");
const morgan =require("morgan");
const userRoute =require("./routes/users");
const authRoute =require("./routes/auth");
const postRoute =require("./routes/posts");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL , 
    { useNewUrlParser: true, useUnifiedTopology: true },
     ()=>{
    console.log("Connected to MongoDB");
    }
);


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req,res)=>{
    res.send("Welcome to Homepage")
})

app.get("/users", (req,res)=>{
    res.send("Welcome to User page")
})


app.use("/backend/users" , userRoute);
app.use("/backend/auth" , authRoute);
app.use("/backend/posts" , postRoute);

app.listen(8800,()=>{
    console.log("Backend server is running");
})