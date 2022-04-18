import React, { useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "../Administrador/administrador.css";
import swal from "sweetalert";
import axios from "axios";


const Notificaciones = () => {
  const [{ user, equipments }, dispatch] = useStateValue();
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
          marginBottom: "7vh",
        }}
      >
        {/*NOTIFICACIONES*/}
        <div
          style={{
            marginLeft: "5vw",
            borderStyle: "solid",
            borderWidth: "0.5px",
            borderColor: "rgb(217, 217, 217)",
            borderRadius: "10px",
            width: "38vw",
            height:"100%",
            maxHeight: "50vh",
          }}
        >
          <h3 style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <strong>Notification #747848484</strong>
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "1vw",
              marginBottom: "2vw",
              marginTop: "2vw",
              borderStyle: "solid",
              borderWidth: "0.5px",
              borderColor: "rgb(217, 217, 217)",
              borderRadius: "10px",
              width: "35vw",
              height:"100%",
              maxHeight: "18vh",
            }}
          >
            <div style={{ margin: "10px" }}>
              <h6>
                <strong>User:</strong>
              </h6>
            </div>

            <div style={{ margin: "8px" }}>
              <p>9483498349</p>
            </div>

            <div style={{ margin: "10px" }}>
              <h6>
                <strong>Message:</strong>
              </h6>
            </div>

            <div style={{ margin: "8px" }}>
              <p>
                good morning, I want to know the price of a new web app for my
                business
              </p>
            </div>
          </div>

          <div style={{ marginLeft: "1vw", marginRight: "2vw" }}>
            <form>
              <input
                type="textarea"
                className="form-control"
                aria-describedby="reply"
              />
              <button
                type="submit"
                className="btn btn-dark"
                style={{ marginTop: "3vh", marginBottom: "2vh" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Notificaciones;
