
import React from "react";
import { motion } from "motion/react";
import "../Intro/intro.css";
import { useNavigate } from "react-router-dom";

export function Intro() {

    let navigator=useNavigate()

    const comfortcontainer = {
        initial: {
            opacity: 0,
            x: 2000,
        },
        animation: {
            opacity: 1,
            x: 70,
            transition: {
                duration: 1,
                delay: 2.5
            }
        }
    };

    return (
        <div className="intro">

            <div className="horizon-group">

                <motion.h1
                    className="horizon"
                    initial={{ scale: 12 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut"
                    }}
                >
                    HORIZON
                </motion.h1>

                <motion.div
                    className="comfort"
                    variants={comfortcontainer}
                    initial="initial"
                    animate="animation"

                    onAnimationComplete={()=>
                    {
                        setTimeout(()=>{
                            navigator("/Home")
                        },600)
                    }
                    }
                >
                    Here Comfort Ends
                </motion.div>

            </div>

        </div>
    );
}
