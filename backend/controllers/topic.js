import { Topic } from "../models/topic.js";

export const getMyTopic=async(req,res,next)=>{
    try {
    const topic=await Topic.findById(req.params.id);
    if(!topic)return next(new ErrorHandler("Topic not found",404));
    res.status(200).json({
        success:true,
        topic
    })
    } catch (error) {
        next(error)
    }
 };
 export const addMyTopic=async(req,res,next)=>{
    try{
        const {topicName,notes,previusYear,books}=req.body;

    await Topic.create({ 
        topicName,
        notes,
        previusYear,
        books
    });

    res.status(201).json({
        success:true,
        message:"topic added successfully",
    })
    }
    catch(err){
        next(err);
    }
 };
 export const addAllTopic=async (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
 };
