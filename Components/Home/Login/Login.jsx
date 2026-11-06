import { useState } from 'react';
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
export function Login()
{
    let[showOTP,setShowOTP]=useState(false)
    let navigate=useNavigate()

    let SendOTP=()=>{
        // email vertificaion if true

        setTimeout(()=>
        {
            setShowOTP(true)
        },50)
    }
    
    return (
        <>
            <Link className={styles.back} onClick={()=>navigate(-1)}>Back</Link>
            <div className={styles.logincheck}>
                
                <label className={styles.label}>Email</label>
                    <input type="email" name="Email"/>
                <br/>
                <button className={styles.button} onClick={SendOTP}>Send OTP</button>
                {showOTP && <div className={styles.OTPbox}>
                    <input  className={styles.OTPBOXES} type="text" name="OTP-one"/>
                    <input className={styles.OTPBOXES} type="text" name="OTP-two"/>
                    <input className={styles.OTPBOXES} type="text" name="OTP-three"/>
                    <input className={styles.OTPBOXES} type="text" name="OTP-four"/>
                    <input className={styles.OTPBOXES} type="text" name="OTP-five"/>
                    <input className={styles.OTPBOXES} type="text" name="OTP-six"/>
                </div>
                }

            </div>     
        </>
    )

}