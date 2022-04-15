
import { Link as LinkRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import { styled } from '@mui/material/styles';
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


// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DetalleEquipments = () => {
  const [{ equipments }, dispatch] = useStateValue()
  const [expanded, setExpanded] = React.useState(false);
  const [checkKey, setCheckKey] = useState("")
  let cont = 0;
  const handleExpandClick = (parametro) => {
    setCheckKey(parametro)
    setExpanded(!expanded);
    console.log(checkKey)
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/equipments")
      .then(response => {
        dispatch({
          type: accionType.EQUIPMENTSDB,
          equipments: response.data.response.equipments
        })
      })
  }, [])

  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        <h1>DETALLE PC</h1>
        <Box
          component="form"
          sx={{'& > :not(style)': { m: 1, width: '60ch' }, display:"flex", justifyContent:"center" }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Find your Equipment"  focused />
        </Box>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {equipments?.map(equipment => {
            cont = cont + 1
            return (
              <Card sx={{ width: 345, margin: "30px" }}>
                <CardHeader
                  avatar={
                    <FavoriteIcon sx={{ color: red[500] }} />
                  }
                  /*     action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
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
              </Card>)
          })
          }
        </div>


      </div>
    </>
  )

}

export default DetalleEquipments