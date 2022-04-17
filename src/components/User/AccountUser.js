import React, { useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "./userAccount.css";
import userImage from "../User/userImage.png"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import swal from 'sweetalert'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link as LinkRouter } from "react-router-dom";


const Home = () => {
    const [{ user, equipments }, dispatch] = useStateValue();
    const [reload, setReload] = useState(false)
 
    let idFavorite = [];
    let myFavorite = [];

    equipments.map((item) => {
        if (user.datosUser.favorite.includes(item._id)) {
            myFavorite.push(item);
        }
    });
    const favorite = async (id) => {
        const token = localStorage.getItem("token")
        if (!token) {
            swal({
                title: "Go to sign in to post your opinions",
                icon: "error",
                buttons: "ok"
            })
        }
        else {
            axios.put(`http://localhost:4000/api/favorite/${id}`, {},
                { headers: { 'Authorization': 'Bearer ' + token } })
                .then(response => {
                    setReload(!reload)
                })
        }
    }
    //Orly al array My Favorite le puedes hacer el map de las cards
    return (
        <>
        {user.datosUser.email!=="seomadesign@gmail.com"?
            <div>
                <div className="banner d-flex justify-content-between align-items-center col-lg-5 col-sm-7 col-md-7  m-auto mb-5">
                    <div className="custom-header-title col-sm-12 col-md-6 col-lg-5 ">
                        <h1 className="">Your account</h1>
                        <h4 className="custom-header-subtitle">Find your activity history here</h4>
                    </div>
                    <div>
                        <img
                            src={user.datosUser.img ? user.datosUser.img : userImage}
                            className="custom-image d-block w-100 col-sm-12 col-md-6 col-lg-6 col-lg-5"
                            alt="User Image"
                        />
                    </div>
                </div>

                {/* Datos */}
                <div className="card  col-lg-4 col-sm-5 col-md-5  m-auto mb-4">
                    <h5 className="card-header background-card">Account details</h5>
                    <div className="card-body data">
                        <p className="card-text justify-content-between d-flex p-2">
                            <div className="d-inline">User</div>
                            <div className="d-inline text-secondary">PRUEBA</div>
                        </p>
                        <p className="card-text d-flex p-2 justify-content-between">
                            <div className="d-inline">Email</div>
                            <div className="d-inline text-secondary">{user.datosUser.email}</div>
                        </p>
                    </div>
                </div>
                <div className="card custom-card col-lg-4 col-sm-5 col-md-5  m-auto mb-4">
                    <h5 className="card-header background-card ">Personal Details</h5>
                    <div className="card-body data">
                        <p className="card-text d-flex p-2 justify-content-between">
                            <div className="d-inline">Name</div>
                            <div className="d-inline text-secondary">{user.datosUser.name}</div>
                        </p>
                        <p className="card-text justify-content-between d-flex p-2 ">
                            <div className="d-inline">Last Name</div>
                            <div className="d-inline text-secondary">{user.datosUser.lastName}</div>
                        </p>
                        <p className="card-text justify-content-between d-flex p-2">
                            <div className="d-inline">ID card</div>
                            <div className="d-inline text-secondary">PRUEBA</div>
                        </p>
                        <p className="card-text justify-content-between d-flex p-2">
                            <div className="d-inline">Phone Number</div>
                            <div className="d-inline text-secondary">PRUEBA</div>
                        </p>
                    </div>
                </div>
                
                {/* Card favorites */}
                <div className="card custom-card text-center card text-center col-lg-8 col-sm-5 col-md-5  m-auto mb-5 ">
                    <div className="card-header background-card">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link custom-nav-link custom-link active background-card-click" aria-current="true" href="#">
                                    Favorites
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link custom-nav-link background-card-click" href="#">
                                    Notifications
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link custom-nav-link background-card-click" href="#">
                                    Your shoping
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body custom-card-body">
                        <h5 className="card-title">Your favorite items</h5>
                        <p className="card-text">Find a list of your favorite items</p>
                      
                      
                        {/* cards de favoritos */}
                        <div style={{ display: "flex" }}>
                            {myFavorite?.map((item) => {
                                return (
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            avatar={
                                                <FavoriteIcon
                                                    className={user && user.datosUser.favorite.includes(item._id) ?
                                                        "colorLike" : ""}
                                                    onClick={() => favorite(item._id)}
                                                />}

                                            title={item.name}

                                        />

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
                                        <Stack spacing={1}>
                                            <Rating name="size-large" defaultValue={2} size="large" />
                                        </Stack>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.price + " $USD"}
                                                <p>
                                                    {item.time}</p>
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ '& > :not(style)': { m: 1.7 }, display: "flex", justifyContent: "center" }}>
                                            <Fab variant="extended"  >
                                                <LinkRouter to={`/equipment/${item._id}`} style={{ textDecoration: "none", color: "black" }}>
                                                    Buy
                                                </LinkRouter>
                                            </Fab>
                                        </Box>
                                    </Card>
                                )
                            })}
                        </div>


                        <a href="#" className="btn btn-primary favourite-button">
                            Find new products
                        </a>
                    </div>
                </div>

                <div className="d-grid gap-2 col-1 mx-auto custom-card">
                    <button
                        type="button"
                        className="btn btn-primary logout-button"

                    >
                        Log Out
                    </button>
                </div>
            </div>
            :          
            <h1 style={{marginTop:"10vh"}}>PERFIL ADMINISTRADOR</h1>}
        </>
    );
};

export default Home;
