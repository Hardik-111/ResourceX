import mongoose from "mongoose";

const schema = new mongoose.Schema({
    semCnt : String,
    Subject : {
        type:Array,
        default : []
    },
    createdAt:{
        type:Date,
        default :Date.now,
    }
},{ timestamps:true,});


export const Semister=mongoose.model("Semister",schema);