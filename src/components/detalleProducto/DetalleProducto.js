import React, { useEffect, useState } from "react";
import HeroProduct from '../product/HeroProduct'
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import pcBase from '../compuBase.jpg'
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const DetalleProducto = () => {

const [appPulsada, setAppPulsada] = useState()


  useEffect(() => {
    axios.get("http://localhost:4000/api/apps")
    .then(response => {
      dispatch({
        type: accionType.APPSDB,
        apps: response.data.response.apps
      })
    })
}, [])

  const [{ apps}, dispatch] = useStateValue()
  let appWeb = [] 
  
  apps.map((app)=>{
    if(app.type ==="App Web")
    return(
     appWeb.push(app)
     ) }) 

   const tipoDeAppp = (event) =>{
      console.log(event.target.name)
   }

console.log(appWeb)
return (
    <>
    <div>DetalleProducto</div>    
    <HeroProduct/>
    <div style={{display:"flex", justifyContent:"center"}}>
      {appWeb.map((app)=>{
        return(
          <div>
          <Checkbox {...label} defaultChecked name={app.name} onClick={tipoDeAppp}/> 
          {app.name}
          </div>       
        )
        
        })
      }

    </div>



    <div>
      <div>
      <img src={pcBase}></img>
      </div>
      <div>
      </div>
    </div>
    </>
  )
}

export default DetalleProducto