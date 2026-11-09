
import mongoose from "mongoose";

export async function dbconfig()
{
    let mongourl="mongodb://127.0.0.1:27017/Horizon"

    try{
            let connectionresponse= await mongoose.connect(mongourl)

            console.log("Mongo DB connection")
            console.log(`Mongo is ${ connectionresponse.connection.host}`)
            console.log(`Mongo is ${ connectionresponse.connection.port}`)
            console.log(`Mongo is ${ connectionresponse.connection.name}`)
    }catch(error)
    {
        console.log(`Mongo DB connection failed ${error}`)
    }
}

// --- db/URL and URI
