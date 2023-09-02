import React from "react"
import { useNavigate } from "react-router-dom"

export const Home2 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>HOME 2</h1>
            <button onClick={()=>{
                navigate('/home3')
            }}>Go to Home 3</button>
        </div>
    )
} 