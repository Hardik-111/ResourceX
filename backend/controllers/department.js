import { Department } from "../models/department.js";

export const getMyDepartment=async(req,res,next)=>{
    try {
    const department=await Department.findById(req.params.id);
    if(!department)return next(new ErrorHandler("department not found",404));
    res.status(200).json({
        success:true,
        department
    })
    } catch (error) {
        next(error)
    }
 };

//  export const getAllDepartment=async(req,res,next)=>{
//     try{ const userid=req.user._id;
//      const dept = await Department.find();
//      res.status(200).json({
//          success:true,
//          dept,
//          user: userid
//      })}catch(error){
//          next(error)
//      }
//  };