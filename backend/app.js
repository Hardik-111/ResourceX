import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import departmentRouter from "./routes/department.js"
import semisterRouter from "./routes/semister.js"
import subjectRouter from "./routes/subject.js"
import topicRouter from "./routes/topic.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app=express();

config({
    path:"./data/config.env",
});
// Middle ware 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);
app.use("/api/v1/department",departmentRouter);
app.use("/api/v1/semister",semisterRouter);
app.use("/api/v1/subject",subjectRouter);
app.use("/api/v1/topic",topicRouter);


app.get("/",(req,res)=>{
    res.send("Nice Working");
}); 

app.use(errorMiddleware);

