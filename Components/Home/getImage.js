

export let getImage=async()=>
{
    let response=await fetch('https://in.pinterest.com/pin/421438477635156748/',)
        
        if(!response.ok)
        {
            return null;
        }

        const jsondata= await response.json()

        return jsondata;
    
}