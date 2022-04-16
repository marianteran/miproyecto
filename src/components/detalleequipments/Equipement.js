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
                equipment.map((item) => {
                    return (
                        <div>
                            {/* <h6 style={{ marginTop: "30vh" }}>{item.name}</h6> */}

                            <div class="encabezado">
                                <h1 class="namePage">{item.name}</h1>
                            </div>

                            <div class="menuCentral">

                                <div class="main">
                                    <div class="yourPage">{item.likes}</div>
                                </div>

                                <div class="menu">
                                    <div class="menuItem">{item.price}</div>
                                    <div class="menuItem">{item.time}</div>
                                    <div class="menuItem">{item.shippingPrice}</div>
                                    <div class="menuItem">{item.brand}</div>
                                </div>

                                <div class="main">
                                    <div class="yourPage">{item.image}</div>
                                </div>

                                <div class="main">
                                    <h3>{item.descrption}</h3>
                                    <h4>{item.function}</h4>
                                </div>

                            </div>

                        </div>
                    )
                }) : ""}
        </>
    )
}
export default Equipment 
