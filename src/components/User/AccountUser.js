import React, { useState } from "react";
import { useStateValue } from '../../context/Stateprovider';


const Home = () => {
    const [{ user }, dispatch] = useStateValue()
    console.log(user)
    return (
        <>
                 
        <h1 style={{marginTop:"10vh"}}>ACCOUNT USER</h1>                
                
        </>
    )
}

export default Home