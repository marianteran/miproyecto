import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import imgPc from "../detalleProducto/AppWeb/Static.PNG";


const Cart = () => {
 
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div
        style={{
          marginTop: "22vh",
          marginLeft: "2vw",
          marginBottom: "10vh",
          display: "flex",
          flexDirection: "row",
          
        }}
      >
        {/* CONTACT */}
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "0px",
            borderColor: "rgb(217, 217, 217)",
            borderRadius: "10px",
            width: "48vw",
            height: "50vh",
            marginLeft:"3vw"
          }}
        >
          <h3 style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <strong>Contact information</strong>
          </h3>
          <Box
            sx={{
              width: 700,
              maxWidth: "100%",
              marginTop: "2vh",
              marginLeft: "1vw",
            }}
          >
            <TextField fullWidth label="Name" id="Name"/>
          </Box>
          <Box
            sx={{
              width: 700,
              maxWidth: "100%",
              marginTop: "2vh",
              marginLeft: "1vw",
            }}
          >
            <TextField fullWidth label="Email" id="Email" />
          </Box>
          <Box
            sx={{
              width: 700,
              maxWidth: "100%",
              marginTop: "2vh",
              marginLeft: "1vw",
            }}
          >
            <TextField fullWidth label="Direction" id="Direction" />
          </Box>
          <Box
            sx={{
              width: 700,
              maxWidth: "100%",
              marginTop: "2vh",
              marginLeft: "1vw",
            }}
          >
            <TextField fullWidth label="Phone Number" id="Phone Number" />
          </Box>
        </div>

            {/* SHOPPING CART */}
        <div
          className="cartInfo"
          style={{
            marginLeft: "3vw",
            borderStyle: "solid",
            borderWidth: "0.5px",
            borderColor: "rgb(217, 217, 217)",
            borderRadius: "10px",
            width: "38vw",
            height: "100%",
          }}
        >
          <h3 style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <strong>My shopping cart</strong>
          </h3>


          {/* CART ITEM */}
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "2vh", }}>
            <div>
              <img
                src={imgPc}
                alt="img"
                width="80"
                style={{
                  marginTop: "2vh",
                  marginLeft: "1vw",
                }}
              />
            </div>
            <div style={{ marginTop: "3vh", marginLeft: "1vw" }}>
              <p>APP WEB</p>
            </div>
            <div style={{
          marginTop: "2vh",
          marginLeft: "6vw",
        }}>
              <Stack direction="row" spacing={1}>
                <IconButton aria-label="remove" onClick={()=>{setCounter(counter -1)}}>
                  <RemoveIcon />
                </IconButton>
                <p style={{
          marginTop: "1vh",
        }}>{counter}</p>
                <IconButton aria-label="add" onClick={()=>{setCounter(counter +1)}}>
                  <AddIcon />
                </IconButton>
              </Stack>
            </div>
            <div style={{ marginTop: "3vh", marginLeft: "8.5vw" }}>
              <p>$500</p>
            </div>
          </div>
          
          

          {/* TOTAL */}
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "2vh" }}>
            <div>
            <h5 style={{ marginTop: "1vh", marginLeft: "2vw" }}><strong>Total</strong></h5>
            </div>
            <div>
            <h5 style={{ marginTop: "1vh", marginLeft: "27vw" }}><strong>$500</strong></h5>
            </div>
          </div>
          
        </div>
      </div>

      {/* BOTON CONTINUAR */}
      <div
        style={{
          marginTop: "5vh",
          marginBottom: "20vh",
          marginLeft: "71vw",
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained">Continue</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Cart;
