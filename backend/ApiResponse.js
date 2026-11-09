// this class is made to standardize the output of showing the response message

class ApiResponse 
{
    constructor(statusCode,data,message="Success")
    {
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400

    }
}