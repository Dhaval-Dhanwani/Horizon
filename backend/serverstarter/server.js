import express from 'express'
import { dbconfig } from '../dbconfig/dbconfig.js';


const PORT=3000;

let app=express();

(
    async function()
    {
        await dbconfig();

        // allow the json data 
        app.use(express.json())
        
        //to allow the form data to come from frontend
        app.use(express.urlencoded({extended:false}))

        app.listen(PORT,()=>{
            console.log(`Server is running in ${PORT}`)
        })
    }
)()
