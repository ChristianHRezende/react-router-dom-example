import React from "react"
import { useNavigate } from "react-router-dom"

export const Home1 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>HOME 1</h1>
            <button onClick={()=>{
                navigate('/home2') 
            }}>Go to Home 2</button>
        </div>
    )
} 