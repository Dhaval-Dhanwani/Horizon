import mongoose from "mongoose";
import { number } from "motion";


function priceValidate(pricee)
{
    return pricee>0;
}
let validatwithError=[priceValidate,"Raise You price for product"]

// this is known as the custom validator in mongoose
// pass only function--> passing custom validator
// pass validatwithError--> passing validator function with the error safety

let productSchema= new mongoose.Schema({

    // image
    // images of image
    productName:
    {
        type:String,
        required:true,
        unique:true,
    },
    price:
    {
        type:number,
        required:true,
        validator:validatwithError,
    },
    quantity:
    {  
        type:number,
        required:true,
        min:1
    },
    description:
    {
        type:String,
    },
    reviews:
    {
        type:String,
    },
    colors:
    {
        type:[String],
        required:true,
    },
    size:
    {
        type:[number],
        required:true
    },
    genderfor:
    {
        type:String,
        enum:["male","female"]
    },
    Wishing:
    {
        type:Boolean
    },
    Cart:
    {  
        type:boolean
    }

},{timestamps:true})


export let Product=mongoose.model("Product",productSchema)