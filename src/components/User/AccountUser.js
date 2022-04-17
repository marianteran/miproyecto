import React, { useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "./userAccount.css";
import userImage from "./userImage.png"


const Home = () => {
  const [{ user, equipments }, dispatch] = useStateValue();
  console.log(user); 
  console.log(equipments);


  let idFavorite = [];
  let myFavorite = [];

  equipments.map((item) => {
    console.log(item);
    if (user.datosUser.favorite.includes(item._id)) {
      myFavorite.push(item);
    }
  });

  //Orly al array My Favorite le puedes hacer el map de las cards
  return (
    <>
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
    </>
  );
};

export default Home;
