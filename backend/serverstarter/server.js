    import express from 'express'
    import { dbconfig } from '../dbconfig/dbconfig.js';
    import 'dotenv/config'

    // config the cors and cookie-parse learn--> this is remaing task
    let app=express();

    (
        async function()
        {
            await dbconfig();

            // allow the json data 
            app.use(express.json())
            
            //to allow the form data to come from frontend
            app.use(express.urlencoded({extended:false}))

            
            app.get('/api/homie',(req,res)=>
            {
                res.status(200).send('hello');
            })

            app.listen(`${process.env.PORT}`,()=>{
                console.log(`Server is running in ${process.env.PORT}`)
            })
        }
    )()
