import { User } from "../models/user.js ";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllUsers=async (req,res)=>{
    try{const users=await User.find({});
    res.json({
        success:true,
        users,
    })}
    catch(error){next(error);}
};

export const login=async (req,res,next)=>{
    try{const {email,password}=req.body;

    let user=await User.findOne({email}).select("+password");
    if(!user) return next(new ErrorHandler("Invalid user or Password",404));
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return next(new ErrorHandler("Wrong Email or Password",404));
    sendCookie(user,res,`Welcome back ,${user.name}`,201);}
    catch(error){next(error);}
}

export const registerUser = async (req,res)=>{
    try{const {name,email,password}=req.body;

    let user=await User.findOne({email});
    if(user) return next(new ErrorHandler("user Already exist",404));
    
    const hashedPassword= await bcrypt.hash(password,10);
    user=await User.create({ name,email,password:hashedPassword});
    sendCookie(user,res,"Registered Successfully",201);}
    catch(error){next(error);}
};

export const sepacialFuntion=(req,res)=>{
    try{res.json({
        success:true,
        message:"Just joking"
    })}catch(error){next(error);}
};

export const getMyProfile = (req,res)=>{
   try{res.status(200).json({
        success:true,
        user:req.user,
    })}catch(error){next(error);}
};

export const logout=(req,res)=>{
   try{res.status(200).cookie("token","",{expires:new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="Deveplment" ? "lax" : "none",
    secure:process.env.NODE_ENV==="Deveplment" ? false : true,

}).json({
        success:true,
        user:req.user,
    })}catch(error){next(error);}
};

export const getUserName=async (req,res)=>{
    try{const {id}=req.params;
    const user=await User.findById(id);
    res.json({
        success:true,
        message : user.name
    })}catch(error){next(error);}
};
export const deleteUser=async (req,res)=>{
    try{const {id}=req.params;
    const user=await User.findById(id);
    await user.remove()
    res.json({
        success:true,
        message:"user removed",
    })}catch(error){next(error);}
};
