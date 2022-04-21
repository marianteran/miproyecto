import React, { useEffect, useState } from "react";
import HeroDetalle from "./HeroDetalle";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox';
import "./app.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StaticPC from '../detalleProducto/AppWeb/Static.PNG'
import PresupuestoEnv from "./PresupuestoEnv.js";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SocialMedia = () => {
	
	//BASES DE DATOS:
	const [{ smedia }, dispatch] = useStateValue()
    const [redes, setRedes] = useState()
	useEffect(() => {
		axios.get("http://localhost:4000/api/smedia")
			.then(response => {
				dispatch({
					type: accionType.SMEDIADB,
					smedia: response.data.response.smedia
				})
                console.log(response.data.response.socialMedia) 
                setRedes(response.data.response.socialMedia)
			})

		
	}, []) 



	// funciones materia UI
	const [checked, setChecked] = React.useState([]);
	const [imgenPc, setImagenPc] = useState('smedia1.png')
	const [expanded, setExpanded] = React.useState(false);
	const [price, setPrice] = useState()
	const [priceTotal, setPriceTotal] = useState(0)
	const [presuSend, setPresuSend] = useState(false)
    const [red, setRed] = useState()
	


	

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};


	const handleToggle = (value, price) => () => {
		const currentIndex = checked.indexOf(value);

		console.log(price);
		console.log(priceTotal)
		const newChecked = [...checked];
		const newPrice = priceTotal + price
		setPriceTotal(newPrice)

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		redes.functions.map((item) => {
			if (item.title === value) {
				setImagenPc(item.image)
			}
		})
	};

	function presupuesto() {
		setPresuSend(true)
	}
    function selectRed(event) {
        setRed(event.target.name)}


	console.log(red)
	return (
		<>
			<div>< HeroDetalle /></div>


			<div className="detalleAppWebContainer">
            <div className="checkboxstatic">
					{redes?.map((app) => {
						return (
							<div>
					{/* 			{app.name === "Static" ? */}
									<Checkbox {...label} Change={selectRed} name={app.name}
									/> {app.name} 
									{/* : <Checkbox {...label} checked={personal} name={app.name} onClick={tipoDeAppp} */}
									{/* />} */}
								{/* {app.name} */}
							</div>)
					})
					}
				</div>		

					<div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

						<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
							<div className="detalleProductImg">
								<img src={process.env.PUBLIC_URL + `/img/apps/SocialMedia/${imgenPc}`} alt="images"></img>
							</div>

							<div>
								{!presuSend ?
									<List
										sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
										subheader={<ListSubheader>functions</ListSubheader>}
									>
										{redes?
                                        redes[0].functions.map((item) => {
											return (
												<div>
													<ListItem>
														<ListItemIcon>
															<AddCircleOutlineIcon />
														</ListItemIcon>
														<ListItemText id="switch-list-label-wifi" primary={item.title} />
														<Switch
															edge="end"
															onChange={handleToggle(item.title, item.price)}
															checked={checked.indexOf(item.title) !== -1}
															disabled={checked.indexOf(item.title) !== -1}
															inputProps={{
																'aria-labelledby': 'switch-list-label-wifi',
															}}
														/>
													</ListItem>
												</div>
											)
										}):""}
										<h3>Total:{" " + priceTotal + " $USD"}</h3>
										<button onClick={() => presupuesto()} type="button" class="btn btn-primary">Consult for this budget</button>


									</List> :   " "}

							</div>
						</div>
						<div>
							{presuSend ?
								<PresupuestoEnv checked={checked} app={redes} /> : ""}
						</div>
					</div>



			</div>
		</>
	)
}

export default SocialMedia