import React, { useEffect, useState } from "react";
import HeroProduct from '../product/HeroProduct'
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
	const [checked, setChecked] = React.useState([]);
	const [imgenPc, setImagenPc] = useState('pStatic.png')
	const [expanded, setExpanded] = React.useState(false);
	const [price, setPrice] = useState()
	const [priceTotal, setPriceTotal] = useState(0)
	const [presuSend,setPresuSend ] = useState(false)

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};


	const handleToggle = (value, price) => () => {
		const currentIndex = checked.indexOf(value);

		console.log(price);
		console.log(priceTotal)
		const newChecked = [...checked];
		const newPrice = priceTotal+price	
		setPriceTotal(newPrice)

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);	
		appWeb[1].functions.map((item) => {
			if (item.title === value) {
				setImagenPc(item.image)
			}
		})
	};

	function presupuesto() {
		setPresuSend(true)
	}

	

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
	console.log(appWeb)
	return (
		<>
			<div>DetalleProducto</div>
			{/*   <HeroProduct />*/}

			<div className="detalleAppWebContainer">

				<div style={{ display: "flex", justifyContent: "center", marginTop: "10vh", marginBottom: "5vh" }}>
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

					<div className="" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
						<div className="detalleProductImg">

							<img src={process.env.PUBLIC_URL + `/img/AppWeb/${imgenPc}`} alt="images"></img>
							{/* <img src={imgenPc} alt="" /> */}

						</div>
						<div>
						{!presuSend?
							<List
								sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
								subheader={<ListSubheader>functions</ListSubheader>}
							>
								{appWeb[1].functions.map((item) => {
									return (
										<div>
											<ListItem>
												<ListItemIcon>
													<AddCircleOutlineIcon />
												</ListItemIcon>
												<ListItemText id="switch-list-label-wifi" primary={item.title} />
												<Switch
													edge="end"												
													onChange={handleToggle(item.title,item.price)}
													checked={checked.indexOf(item.title) !== -1}
													disabled={checked.indexOf(item.title) !== -1}
													inputProps={{
														'aria-labelledby': 'switch-list-label-wifi',
													}}
												/>
											</ListItem>
										</div>
									)
								})}

							</List>:""}
							<h3>Total:{" "+priceTotal +" $USD"}</h3>
							<button  onClick={()=>presupuesto()} type="button" class="btn btn-primary">Consult for this budget</button>
						</div>
						{presuSend?
						<PresupuestoEnv checked={checked} app={appWeb[1]} />:""}
					</div>
								
						:
					<div className="detalleProductImg">
						<img src={StaticPC} alt="" />
					</div>}

			</div>
		</>
	)
}

export default DetalleAppWeb