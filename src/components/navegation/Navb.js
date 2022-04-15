import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import { useEffect } from 'react';
import swal from 'sweetalert'
import axios from 'axios'
import './navb.css'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(121, 209, 245) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Navb = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [{ user }, dispatch] = useStateValue()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    async function cerrarSesion() {
        const email = user.datosUser.email
        await axios.post("http://localhost:4000/api/signout", { email })
            .then(response => {
                if (response.data.success) {
                    swal({
                        title: response.data.response,
                        icon: "warning",
                        buttons: "ok"
                    })
                    localStorage.removeItem("token")
                    dispatch({
                        type: accionType.USERDB,
                        user: null
                    })
                }
            })
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark scrolling-navbar fixed-top   py-3 shadow-sm">
                <div className="container">
                    <LinkRouter className="navbar-brand fw-bold fs-4" to="/">LOGO</LinkRouter>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkRouter className="nav-link active" aria-current="page" to="/">Home</LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter className="nav-link" to="/product">Productos</LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter className="nav-link" to="/servicios">Servicios</LinkRouter>
                            </li>
                        </ul>

                        <div className='nav-Cart'>
                            <LinkRouter to='/cart' className="btn btn-outline-light ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart(0)
                            </LinkRouter>
                        </div>

                        <div className="buttons">
                            {!user ?
                                <LinkRouter to='/signin' className="btn btn-outline-light">
                                    <i className="fa fa-user-plus me-1"></i> Login
                                </LinkRouter>
                                :
                                <div>
                                    <Button
                                        id="demo-customized-button"
                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        variant="contained"
                                        disableElevation
                                        onClick={handleClick}
                                    // endIcon={<KeyboardArrowDownIcon />}
                                    >
                                        {user.datosUser.from !== "MyTineray" ?
                                            <img src={user.datosUser.img} className="nav-ImgUser" alt="login" />
                                            :
                                            <Avatar sx={{ bgcolor: red[500] }} style={{ padding: 2, marginTop: 6, marginLeft: 4 }}>
                                                {user.datosUser.img}
                                            </Avatar>
                                        }
                                    </Button>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={() => cerrarSesion()} disableRipple>
                                            <PersonOffIcon />
                                            Sign Out
                                        </MenuItem>
                                    </StyledMenu>
                                </div>

                            }
                            {/* <LinkRouter to='' className="btn btn-outline-light ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register
                            </LinkRouter> */}


                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navb