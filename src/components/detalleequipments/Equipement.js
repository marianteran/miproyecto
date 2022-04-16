import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


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
                        <div className="equipments-Container">
                            {/* <h6 style={{ marginTop: "30vh" }}>{item.name}</h6> */}

                            <div className="equipments-ContTittle">
                                <h2 className="equipments-Tittle">{item.name}</h2>
                            </div>

                            <div className="menuCentral">

                                <div className="equipments-menu">
                                    <div className="equipments-likes">{item.likes}♥</div>
                                    <div className="equipments-menuItem">Brand: {item.brand}</div>
                                    <div className="equipments-menuItem">Price: U$D {item.price}</div>
                                    <div className="equipments-menuItem">Lead time: {item.time}</div>
                                    <div className="equipments-menuItem">Shipping price: </div>

                                </div>

                                <div className="main">
                                    <div className="equipments-image">
                                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                            <SwiperSlide>
                                                <img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[0]}`} alt="images"></img>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[1]}`} alt="images"></img>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[2]}`} alt="images"></img>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>

                                <div className="main">
                                    <h3>{item.description}</h3>
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
