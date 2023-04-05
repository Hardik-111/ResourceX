import mongoose from "mongoose";

const schema = new mongoose.Schema({
    subjectName : String,
    topics : {
        type:Array,
        default : []
    },
    createdAt:{
        type:Date,
        default :Date.now,
    }
},{ timestamps:true,});


export const Subject=mongoose.model("Subject",schema);