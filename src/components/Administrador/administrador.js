import React, { useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "../Administrador/administrador.css";
import swal from "sweetalert";
import axios from "axios";
import Notificaciones from "./Notificaciones";
import NuevoProducto from "./NuevoProducto";


const Home = () => {
  const [{ user, equipments, notifica }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);

  let idFavorite = [];
  let myFavorite = [];

  equipments.map((item) => {
    if (user.datosUser.favorite.includes(item._id)) {
      myFavorite.push(item);
    }
  });
  const favorite = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      swal({
        title: "Go to sign in to post your opinions",
        icon: "error",
        buttons: "ok",
      });
    } else {
      axios
        .put(
          `http://localhost:4000/api/favorite/${id}`,
          {},
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((response) => {
          setReload(!reload);
        });
    }
  };

  //Orly al array My Favorite le puedes hacer el map de las cards
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20vh",
          marginBottom: "7vh",
        }}
      >
        {/*MENU*/}
        <div
          class="btn-group-vertical"
          style={{ width: "160px", height: "170px" }}
        >
          <div class="dropdown">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "160px" }}
            >
              Notifications
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {notifica}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Apps
                </a>
              </li>              
              <li>
                <a class="dropdown-item" href="#">
                  Social Media
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PCs
                </a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-light">
            New Product
          </button>
          <button type="button" class="btn btn-light">
            Users profiles
          </button>
          <button type="button" class="btn btn-light">
            Data Base
          </button>
        </div>

        {/*NOTIFICACIONES */}
        <Notificaciones/>

        {/*NEW PRODUCT*/}
        {/*<NuevoProducto/> */}
        
      </div>
    </>
  );
};

export default Home;
