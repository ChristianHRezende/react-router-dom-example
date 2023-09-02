import React from "react"
import { useNavigate } from "react-router-dom"

export const Home3 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>HOME 3</h1>
            <button onClick={()=>{
                navigate('/') 
            }}>Back to Home 1</button>
        </div>
    )
} 