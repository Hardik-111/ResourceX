import mongoose from "mongoose";

const schema = new mongoose.Schema({
    topicName : String,
    notes : {
        type:Array,
        default : []
    },
    previusYear : {
        type:Array,
        default : []
    },
    books : {
        type:Array,
        default : []
    },
    createdAt:{
        type:Date,
        default :Date.now,
    }
},{ timestamps:true,});


export const Topic=mongoose.model("Topic",schema);