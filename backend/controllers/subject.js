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



