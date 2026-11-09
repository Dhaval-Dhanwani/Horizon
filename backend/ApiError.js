// read about the error class of node
// this class is made to show the errors in specfic format
class ApiError extends Error
{
    constructor(statusCode,errormessage="something went wrong",errors=[],stack="")
    {
        super(message)
        this.statusCode=statusCode
        this.errormessage=errormessage
        this.success=false
        this.data=null
        this.errors=errors

        if(stack)
        {
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }


    }
}

export {ApiError}