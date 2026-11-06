
import mongoose from "mongoose";

export async function dbconfig()
{
    let mongourl="mongodb://127.0.0.1:27017/Horizon"

    await mongoose.connect(mongourl)
                    .then(()=>
                    {console.log("Database is connected successfully")})
                    .catch(()=>
                    {
                        console.log("Database is not connected")
                    })
}

