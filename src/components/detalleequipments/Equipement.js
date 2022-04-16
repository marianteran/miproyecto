import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/Stateprovider";


const Equipment = () => {
    const { id } = useParams()
    const [{ equipments }, dispatch] = useStateValue()

    let equipment = equipments.filter(item => item._id === id)
    console.log(equipment)
    return (
        <>
        {equipment.length > 0 ?
        equipment.map((item)=>{
            return(
                <div>
                        <h1 style={{marginTop:"30vh"}}>{item.name}</h1>

                </div>
            )
        }):""}          
        </>
    )
}
export default Equipment 
