import mongoose from "mongoose"

let imageSchema=new mongoose.Schema({
    imageurl:{
        type:String,
        required:true
        },

    filename:{
        type:String,
        required:true
        },
    },
    {
        timestamps:true
    }
);

export let imagemodel=mongoose.model("Image",imageSchema)