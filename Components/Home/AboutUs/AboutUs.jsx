import { Link,useNavigate } from 'react-router-dom'
import './about.css'

export function AboutUs()
{
    const navigate=useNavigate()

    return (
        <>
            <Link   className="back" onClick={()=>navigate(-1)}>Back</Link>
        </>
    )

}