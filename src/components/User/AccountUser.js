import React, { useState } from "react";
import { useStateValue } from '../../context/Stateprovider';


const Home = () => {
    const [{ user, equipments }, dispatch] = useStateValue()
    console.log(user)
    console.log(equipments)

    let idFavorite =[]
    let myFavorite = []

    equipments.map((item)=>{
        console.log(item);
        if(user.datosUser.favorite.includes(item._id)){
            myFavorite.push(item)
        }
    })
    
    //Orly al array My Favorite le puedes hacer el map de las cards
    return (
        <>
                 
        <h1 style={{marginTop:"10vh"}}>ACCOUNT USER</h1>                
                
        </>
    )
}

export default Home