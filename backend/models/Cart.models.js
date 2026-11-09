import mongoose from "mongoose";
import { Client } from "./Client.models";

let cartModel=new mongoose.Schema({

    clientId:mongoose.Schema.Types.ObjectId,
    ref:Client
    
})