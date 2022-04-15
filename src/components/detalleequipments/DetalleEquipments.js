
import { Link as LinkRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import { styled } from '@mui/material/styles';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


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
  const [checkKey , setCheckKey] =useState("")
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
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {equipments?.map(equipment => {
            cont = cont +1
            return (
              <Card sx={{ width: 345, margin: "30px" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={equipment.name}
                />
                {/* <CardMedia
                  component="img"
                  height="194"
                  image={process.env.PUBLIC_URL + `/img/equipments/${equipment.image}`}
                  //   image="/static/images/cards/paella.jpg"
                  alt="Paella dish"
                /> */}                  
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
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {equipment.price + " $USD"}
                    <p>
                      {equipment.time}</p>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore 
                    expand={expanded}
                    onClick={()=>handleExpandClick(equipment._id)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
               
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                {checkKey===equipment._id?                 
                  <CardContent>
                    <Typography paragraph>Function:</Typography>
                    <Typography paragraph>
                    {equipment.description}
                    </Typography>
                    <Typography paragraph>                     
                    </Typography>
                    <Typography paragraph>
                      {equipment.description}
                    </Typography>                   
                  </CardContent>
                   :"" }
                </Collapse>
        
              </Card>)
              })
              
              
              }
        </div>


      </div>
    </>
  )

}

export default DetalleEquipments