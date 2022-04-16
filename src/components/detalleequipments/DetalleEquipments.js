
import { Link as LinkRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import { alpha, styled } from '@mui/material/styles';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import swal from 'sweetalert'

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DetalleEquipments = () => { 

  const [{ equipments, equipmentsNew, user }, dispatch] = useStateValue()
  const [reload, setReload] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
      type: accionType.FILTER,
      equipmentsNew: equipments
    })
  }, [reload])
  console.log(equipments)
  const [expanded, setExpanded] = React.useState(false);
  const [checkKey, setCheckKey] = useState("")
  const [brandValue, setBrandValue] = useState("")
 
  let cont = 0;

  

  const handleExpandClick = (parametro) => {
    setCheckKey(parametro)
    setExpanded(!expanded);
    console.log(checkKey)
  };

  let brands = []
  equipmentsNew.map((equipment) => {
    if (!brands.includes(equipment.brand)) {
      return (
        brands.push(equipment.brand)
      )
    }
  })

  function filterEquipments(event) {
    let textEquipment = event.target.value.toLowerCase()
    if (textEquipment !== "") {
      let resultFilter = []
      if (brandValue === "All Brand" || brandValue === "") {
        resultFilter = equipments.filter(equipment =>
          equipment.name.toLowerCase().includes(textEquipment))
      }
      else {
        resultFilter = equipments.filter(equipment =>
          equipment.brand === brandValue &&
          equipment.name.toLowerCase().includes(textEquipment)
        )
      }
      dispatch({
        type: accionType.FILTER,
        equipmentsNew: resultFilter
      })
    }
    else {
      let resultFilter
      resultFilter = equipments.filter(equipment => equipment.brand === brandValue)
      if (resultFilter.length > 0) {
        dispatch({
          type: accionType.FILTER,
          equipmentsNew: resultFilter
        })
      }
      else {
        dispatch({
          type: accionType.FILTER,
          equipmentsNew: equipments
        })
      }
    }
  }

  function selectBrand(event) {
    setBrandValue(event.target.name)
    let resultFilter
    resultFilter = equipments.filter(equipment => equipment.brand === event.target.name)
    dispatch({
      type: accionType.FILTER,
      equipmentsNew: resultFilter
    })
    if (event.target.name === "All Brand") {
      dispatch({
        type: accionType.FILTER,
        equipmentsNew: equipments
      })
    }
  }

  
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
          console.log(response.data.response);
          if (response.data.response.includes(user.datosUser.id)) {
            //   setColorLike("colorLike")
          }
          setReload(!reload)
        })
    }
  }

  console.log(user)
  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        {/* TEXT INPUNT DE BUSQUEDA */}
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '60ch' }, display: "flex", justifyContent: "center" }}
          noValidate
          autoComplete="off"

        >
          <TextField label="Find your Equipment"
            onChange={filterEquipments}
            onKeyPress={filterEquipments}
            focused />
        </Box>


        {/* CHECK DE MARCAS DE BUSQUEDA */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {brands.length > 1 ?
            brands?.map((brand) => {
              return (
                <div>
                  <Switch {...label} defaultChecked onChange={selectBrand} name={brand} />
                  {brand}
                </div>
              )
            })
            :
            <div>
              <GreenSwitch {...label} onChange={selectBrand} name={"All Brand"} />
              Press to see all brands
              <div>
                <h1 style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                  {brandValue === "All Brand" ? "" : brandValue}
                </h1>
              </div>
            </div>}

        </div>

        {/* AQUI COMIENZAN LAS CARDS */}
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {equipmentsNew.length > 0 ?
            equipmentsNew?.map(equipment => {
              cont = cont + 1
              return (
                <Card sx={{ width: 345, margin: "30px" }}>
                  <CardHeader
                    avatar={
                      <FavoriteIcon 
                     className={user && user.datosUser.favorite.includes(equipment._id) ?
                      "colorLike":""}                      
                    onClick={() => favorite(equipment._id)}                

                     />}
               /*      action={
                      <LinkRouter key={equipment._id} to={`/equipment/${equipment._id}`}>
                        <FavoriteIcon style={{ color: "#7dd6e5" }} />
                      </LinkRouter>
                    } */
                    title={equipment.name}
                  />
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/equipments/${equipment.image[0]}`} alt="images"></img>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/equipments/${equipment.image[1]}`} alt="images"></img>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/equipments/${equipment.image[2]}`} alt="images"></img>
                    </SwiperSlide>
                  </Swiper>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {equipment.price + " $USD"}
                      <p>
                        {equipment.time}</p>
                    </Typography>
                  </CardContent>
                  <Box sx={{ '& > :not(style)': { m: 1.7 }, display: "flex", justifyContent: "center" }}>
                    <Fab variant="extended"  >
                      <LinkRouter to={`/equipment/${equipment._id}`} style={{ textDecoration: "none", color: "black" }}>
                        Read More
                      </LinkRouter>
                    </Fab>
                  </Box>
                </Card>)
            }) :
            <h1 style={{ color: "", display: "flex", justifyContent: "center", marginTop: "2%" }}>Sorry, no matches, please try again..</h1>}

        </div>


      </div>
    </>
  )

}

export default DetalleEquipments