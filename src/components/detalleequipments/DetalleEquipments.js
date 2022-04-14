
import { Link as LinkRouter } from "react-router-dom";
import React, { useEffect } from "react";
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
 const [{ equipments}, dispatch] = useStateValue()
  
 useEffect(() => {
 axios.get("http://localhost:4000/api/equipments")
 .then(response => {   
   dispatch({
     type: accionType.EQUIPMENTSDB,
     equipments: response.data.response.equipments
   })
 })
}, [])
 console.log(equipments)

 return(
     <>
     <div style={{marginTop:"50vh"}}>
         <h1>DETALLE PC</h1>
         
     </div>
     </>
 )
 
}

export default DetalleEquipments