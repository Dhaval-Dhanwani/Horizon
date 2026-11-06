function imageTaken()
{
    return (
        <>
            <form action="/uploads" method="POST" enctype="multipart/form-data">
                <input type="file"></input>
            </form>

        </>
    )
}