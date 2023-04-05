import mongoose from "mongoose";

const schema = new mongoose.Schema({
    dptName : String,
    Semister:{
        type: Array,
        default : []
    },
    createdAt:{
        type:Date,
        default :Date.now,
    }
},{ timestamps:true,});


export const Department=mongoose.model("Department",schema);