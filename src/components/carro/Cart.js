import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import imgPc from "../detalleProducto/AppWeb/Static.PNG";

import './cart.css'


const Cart = () => {

	const [counter, setCounter] = useState(0);

	return (
		<div id="cart">
			<div className="cartContenedor">
				{/* CONTACT */}
				<div className="cartInfo">
					<h3 className="cartTitle" >Contact information</h3>
					<Box className="cartBox">
						<TextField fullWidth label="Name" id="Name" />
					</Box>
					<Box className="cartBox">
						<TextField fullWidth label="Email" id="Email" />
					</Box>
					<Box className="cartBox">
						<TextField fullWidth label="Direction" id="Direction" />
					</Box>
					<Box className="cartBox">
						<TextField fullWidth label="Phone Number" id="Phone Number" />
					</Box>
				</div>

				{/* SHOPPING CART */}
				<div className='shopping-cart'>
					<h3 className="cartTitle">
						My shopping cart
					</h3>


					{/* CART ITEM */}
					<div className="cart-item" >
						<div>
							<img src={imgPc} alt="img" />
						</div>
						<div >
							<p>APP WEB</p>
						</div>
						<div className="cart-item-max" >
							<Stack direction="row" spacing={1}>
								<IconButton aria-label="remove" onClick={() => { setCounter(counter - 1) }}>
									<RemoveIcon />
								</IconButton>
								<p style={{
									marginTop: "1vh",
								}}>{counter}</p>
								<IconButton aria-label="add" onClick={() => { setCounter(counter + 1) }}>
									<AddIcon />
								</IconButton>
							</Stack>
						</div>
						<div className="cart-item-price" >
							<p>$500</p>
						</div>
					</div>



					{/* TOTAL */}
					<div className="cart-total" >
						<div>
							<h5 ><strong>Total</strong></h5>
						</div>
						<div>
							<h5 ><strong>$500</strong></h5>
						</div>
					</div>

				</div>
			</div>

			{/* BOTON CONTINUR */}
			<div className="cart-boton">

				<div className="myButton">Continue</div>

			</div>
		</div>
	);
};

export default Cart;
