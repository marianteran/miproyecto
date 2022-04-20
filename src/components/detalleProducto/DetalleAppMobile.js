import React, { useEffect, useState } from "react";
import HeroDetalle from "./HeroDetalle";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import mobileBase from './appMobileBase.webp'
import Checkbox from '@mui/material/Checkbox';
import StaticPC from '../detalleProducto/AppWeb/Static.PNG'
import "./app.css"


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const DetalleAppMobile = () => {
  //BASES DE DATOS:
const [{ apps}, dispatch] = useStateValue()
  useEffect(() => {
    axios.get("http://localhost:4000/api/apps")
    .then(response => {
      dispatch({
        type: accionType.APPSDB,
        apps: response.data.response.apps
      })
    })
}, [])

//CONST SETEABLES:
const [appPulsada, setAppPulsada] = useState()
  let appMobile = []  
 
  apps.map((app)=>{
    if(app.type ==="App Mobile")
    return(
     appMobile.push(app)
     ) }) 


   const tipoDeAppp = (event) =>{
      setAppPulsada(event.target.name)
   }

return (
    <>
   
    <HeroDetalle/>

    

<div style={{display:"flex", justifyContent:"center"}}>
      {appMobile.map((app)=>{
        
        return(
          <div>
            {app.name==="Static"?
          <Checkbox {...label} defaultChecked name={app.name} onClick={tipoDeAppp}/> 
            :<Checkbox {...label}  name={app.name} onClick={tipoDeAppp}/> }
          {app.name}
          </div>       
        )})
      }
   </div>
      {appPulsada==="Personalized"?
        <div>
        <img src={StaticPC}></img>
        </div>
        :
          <div>
      "static"
    </div>

      }

   
  
    </>
  )
}

export default DetalleAppMobile