import { imagemodel } from "../../models/imagemodel"


export async function imageupload(req,res)
{
    try{
        if(!req.file)
        {
            return res.status(400).json({message:"no data found"})
        }
    }

    const image=await =imagemodel
}