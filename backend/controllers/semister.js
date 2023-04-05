import { Semister } from "../models/semister.js";

export const getMySemister=async(req,res,next)=>{
    try {
    const semister=await Semister.findById(req.params.id);
    if(!semister)return next(new ErrorHandler("semister not found",404));
    res.status(200).json({
        success:true,
        semister
    })
    } catch (error) {
        next(error)
    }
 };

