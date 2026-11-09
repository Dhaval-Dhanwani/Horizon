import mongoose, { Schema, Types } from "mongoose";
import { number } from "motion";
import { Product } from "./Prouduct.models";

function validateAge(age)
{
    return age>2;
}
let ageCheckWithError=[validateAge,"Very young age"]


function quantityValidator(amount)
{
    return amount>0;
}

let quantityValidatorWithError=[quantityValidator,"Quantity needs to be more than 0"]

const OrderSchema=new mongoose.Schema({

    product:{
        type:mongoose.Types.Schema.ObjectId,
        ref:Product
    },
    quantity:{
        type:number,
        required:true,
        validator:quantityValidatorWithError
    }
})

const clientSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:number,
        required:true,
        unique:true,
        minlength:[10,"Min length of 10 digits is required"],
        maxlength:[10,"No more than 10 digits are required"]
    },
    alternativePhoneNumber:{
        type:number,
    },
    address:{
            type:String,
            required:true,
    },
    age:
    {
        type:number,
        allowNull:false,
        validator:ageCheckWithError
    },
    MyOrders:
    {
        type:[mongoose.Schema.Types.ObjectId],
        ref:OrderSchema,

    },
    MyWishlist:
    {
        type:[mongoose.Schema.Types.ObjectId],
        ref:Product
    },
    MyOrderCart:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:Product,
    }
    
},{
    timestamps:true
})

export let Client=mongoose.model("Client",clientSchema)