import { Subject } from "../models/subject.js";

export const getMySubject =async(req,res,next)=>{
    try {
    const subject=await Subject.findById(req.params.id);
    if(!subject)return next(new ErrorHandler("subject not found",404));
    res.status(200).json({
        success:true,
        subject,
    })
    } catch (error) {
        next(error)
    }
 };

 export const addMySubject=async(req,res,next)=>{
    try{
        const {subjectName,topics}=req.body;

    await Subject.create({ 
        subjectName,
        topics,
    });

    res.status(201).json({
        success:true,
        message:"Subject added successfully",
    })
    }
    catch(err){
        next(err);
    }
 };
 export const addAllSubject=async (req,res,next)=>{
    try {
        const subject=await Subject.find();
    res.status(200).json({
        success:true,
        subject,
    })
    } catch (error) {
        next(error);
    }
 };




