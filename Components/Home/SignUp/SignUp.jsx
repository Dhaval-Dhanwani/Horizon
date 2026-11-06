import { useEffect, useState } from "react"
import styles from'./signup.module.css'
import { Link, useNavigate } from "react-router-dom"
export function SignUp()
{    
    let navigate=useNavigate();

    function handleSubmit()
    {

    }

    return(
        <>
            <div className={styles.signupbar}>
                <Link onClick={()=>navigate(-1)} className={styles.back}>Back</Link>
                <Link className={styles.login} onClick={()=>navigate("/Login")}>Login</Link>
            </div> 

            <div className={styles.SignUpform}>
                <formdata>
                    <label>Name:</label>
                    <input type="text" name="Username"/>
                    <br/>
                    <label>Phone Number:</label>
                    <input type="number" name="phoneNumber"/>
                    <br/>
                    <label>Email:</label>
                    <input type="email" name="Email"/>
                    <br/>
                    <label>Address:</label>
                    <input type="text" name="Address"/>
                    <br/>
                    <label>Age:</label>
                    <input type="number" name="Age"/>
                    <br/>
                    <button  onClick={handleSubmit}>Submit</button>
                </formdata>
            </div>

            

        </>
    )

}