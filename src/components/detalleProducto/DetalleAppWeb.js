import React, { useEffect, useState } from "react";
import HeroProduct from '../product/HeroProduct'
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import pcBase from './compuBase.jpg'
import Checkbox from '@mui/material/Checkbox';
import "./app.css"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StaticPC from '../detalleProducto/AppWeb/Static.PNG'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const DetalleAppWeb = () => {
  //BASES DE DATOS:
  const [{ apps }, dispatch] = useStateValue()
  useEffect(() => {
    axios.get("http://localhost:4000/api/apps")
      .then(response => {
        dispatch({
          type: accionType.APPSDB,
          apps: response.data.response.apps
        })
      })
  }, [])
  // funciones materia UI
  const [checked, setChecked] = React.useState(['']);
  const [imgenPc, setImagenPc] = useState()

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    console.log(checked)

    if(checked.includes("User Login")&&checked.length===1){
        setImagenPc("pStaticSinLogo.png")
    }
    else if(checked.includes("User Login")&&checked.length===2){
      setImagenPc("pStatic.png")
    }
    else if(checked.includes("User Login")&&checked.length===3){
      setImagenPc("pStatic.png")
    }
    else if(checked.includes("User Login")&&checked.length===4){
      setImagenPc("pLogin.png")
    }
  };

  //CONST SETEABLES:
  const [appPulsada, setAppPulsada] = useState()
  const [statica, setStatica] = useState(true)
  const [personal, setPersonal] = useState(false)
  let appWeb = []
 
  apps.map((app) => {
    if (app.type === "App Web")
      return (
        appWeb.push(app)
      )
  })
  const tipoDeAppp = (event) => {
    if (event.target.name === "Personalized" && event.target.checked) {
      setAppPulsada(event.target.name)
      setStatica(false)
      setPersonal(true)
    }
    else {
      setAppPulsada("Static")
      setPersonal(false)
      setStatica(true)
    }
  }

  return (
    <>
      <div>DetalleProducto</div>
      {/*   <HeroProduct />
 */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}>
        {appWeb.map((app) => {
          return (
            <div>
              {app.name === "Static" ?
                <Checkbox {...label} checked={statica} name={app.name} onClick={tipoDeAppp} />
                : <Checkbox {...label} checked={personal} name={app.name} onClick={tipoDeAppp} />}
              {app.name}
            </div>)
        })
        }
      </div>
      {personal && appPulsada === "Personalized" ?

        <div className="" style={{ display: "flex", flexDirection: "row" }}>
          <div className="detalleProductImg">
            
            <img src={process.env.PUBLIC_URL + `/img/AppWeb/${imgenPc}`} alt="images"></img>          
            {/* <img src={StaticPC} alt="" /> */}
              
          </div>
          <div>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              subheader={<ListSubheader>functions</ListSubheader>}
            >
              {appWeb[1].functions.map((item)=>{
              return(
              <div>                
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary={item.title} />
                    <Switch
                      edge="end"
                      onChange={handleToggle(item.title)}
                      checked={checked.indexOf(item.title) !== -1}                     
                      inputProps={{
                        'aria-labelledby': 'switch-list-label-wifi',
                      }}
                    />
                  </ListItem>
                </div>
                )})};

            </List>
          </div>
        </div>
        :
        <div className="detalleProductImg">
          <img src={StaticPC} alt="" />
        </div>}
    </>
  )
}

export default DetalleAppWeb