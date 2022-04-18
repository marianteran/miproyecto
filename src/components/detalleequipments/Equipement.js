import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import axios from 'axios'
import "swiper/css";
import "swiper/css/navigation";
import swal from 'sweetalert'
import { accionType } from "../../context/reducer";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';


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

const Equipment = () => {
    //funciones de MATERIAL UI
    const actions = [
        { icon: <ModeEditIcon />, name: 'Edit' },
        { icon: <DeleteForeverIcon />, name: 'Delete' }
    ];
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { id } = useParams()
    const [equipment, setEquipment] = useState()
    const [{ user, favorites }, dispatch] = useStateValue()
    const [reload, setReload] = useState(false)
    const [edit, setEdit] = useState(true)
    const [questions, setQuestions] = useState()
    const [changeQuestions, setChangeQuestions] = useState()
    let date = ""

    useEffect(() => {
        axios.get(`http://localhost:4000/api/detailEquipment/${id}`)
            .then(response => {
                console.log(response.data.response)
                setEquipment(response.data.response.equipment)
            })
        axios.get(`http://localhost:4000/api/questions/${id}`)
            .then(response => {
                console.log(response)
                setQuestions(response.data.response.questions)
            })

    }, [reload])

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
                    setReload(!reload)
                })
        }
    }

    const submitQuestions = async (event) => {
        event.preventDefault()
        swal({
            title: "questions sent",
            icon: "success",
            buttons: "ok"
        })
        fecha()
        const dataQuestions = {
            equipment: id,
            user: user.datosUser.id,
            message: event.target[1].value,
            date: date
        }
        await axios.post("http://localhost:4000/api/questions", { dataQuestions })
            .then(response => {
                setQuestions(response.data.response.comment)
            })
        setReload(!reload)
    }


    const deleteEdit = async (id, name) => {
        if (name === "Delete") {
            await axios.delete(`http://localhost:4000/api/questions/${id}`)
                .then(response => setReload(!reload))
        }
        else if (name === "Edit") {
            setEdit(false)
        }

    }
    const inputText = (event) => {
        setChangeQuestions(event.target.value)
    }
    const editQuestions = async (id) => {
        fecha()
        let data = changeQuestions
        let newDate = date
        if (id !== "x") {
            await axios.put(`http://localhost:4000/api/questions/${id}`, { data, newDate })
                .then(response => {
                    setEdit(true)
                    setReload(!reload)
                })
        }
        else {
            setEdit(true)
        }

    }


    function fecha() {
        var registro = new Date()
        var dia = registro.getDate()
        var mes = registro.getMonth() + 1
        var time = registro.getHours() + ":" + registro.getMinutes()
        var year = registro.getYear()
        date = dia + "/" + mes + "/" + year + " " + time
    }

    return (
        <>
            {equipment ?
                equipment.map((item) => {
                    return (
                        <div className="equipments-Container">

                            <div className="equipments-menuCentral">

                                <div className="equipments-menu">

                                    <div className="equipments-ContTittle">
                                        <h2 className="equipments-Tittle">{item.name}</h2>
                                    </div>

                                    <div className="equipments-menuItem">Brand: {item.brand.toUpperCase()}</div>
                                    <div className="equipments-menuItem">Price: U$D {item.price}</div>
                                    <div className="equipments-menuItem">Lead time: {item.time}</div>
                                    <div className="equipments-menuItem">Shipping price: </div>

                                    <div className="equiments-LikAdd">

                                        <button className="equipments-ButtonOnClick" onClick={() => favorite(item._id)}>

                                            <div className={user && user.datosUser.favorite.includes(item._id) ? "equipments-LikesUser" : "equipments-Likes"}>
                                                ♥</div>
                                        </button>


                                        {/* <div className="equipments-likes">{item.likes}♥</div> */}

                                        <div className="equipments-AddToCart">Add to cart</div>

                                    </div>

                                    <div className="equipments-main">
                                        <p>{item.description}</p>
                                        <p>{item.function}</p>
                                    </div>

                                </div>


                                <div className="equipments-image">
                                    <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">
                                        <SwiperSlide className="swiperSlidedetalle">
                                            <img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[0]}`} alt="images"></img>
                                        </SwiperSlide>

                                        <SwiperSlide className="swiperSlidedetalle">
                                            <img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[1]}`} alt="images"></img>
                                        </SwiperSlide>

                                        <SwiperSlide className="swiperSlidedetalle">
                                            <img src={process.env.PUBLIC_URL + `/img/equipments/${item.image[2]}`} alt="images"></img>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>




                            </div>

                            <div className="equipments-questions">
                                <>
                                    <h3 style={{ textDecoration: "none", color: "#4CAF50", textAlign: "center" }}>
                                        {questions?.length > 0 ? "know opinions of our users" :
                                            user ?
                                                <div>
                                                    <p>"Be the first to ask"</p>

                                                </div> :
                                                <div>
                                                    <p>"Be the first to ask"</p>
                                                    <div>
                                                        <LinkRouter to="/signin" className="linkrouterquestion">
                                                            <div>
                                                                <PersonIcon fontSize={"medium"} />
                                                                <h2 className="textSigninQuestion" >Sign in</h2>
                                                            </div>
                                                        </LinkRouter>
                                                    </div>
                                                </div>
                                        }
                                    </h3>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        {user ?
                                            <CardContent>
                                                <form onSubmit={submitQuestions}>
                                                    <div>
                                                        <label for="exampleFormControlTextarea1" className="form-label"></label>
                                                        <div style={{ display: "flex", justifyContent: "right", margin: 0 }}>
                                                            <ExpandMore
                                                                // expand={expanded}
                                                                onClick={handleExpandClick}
                                                                aria-expanded={expanded}
                                                                aria-label="show more"
                                                            >
                                                                <ClearIcon style={{ color: "ff4a48" }} aria-expanded={expanded} />
                                                            </ExpandMore>
                                                        </div>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ borderStyle: "solid", borderColor: "#ff4a48" }}></textarea>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "right" }}>
                                                        <div >
                                                            <ExpandMore
                                                                // expand={expanded}
                                                                onClick={handleExpandClick}
                                                                aria-expanded={expanded}
                                                                aria-label="show more"

                                                            >
                                                                <Fab sx={{ bgcolor: "secondary" }} aria-label="SendIcon" aria-expanded={expanded} type="submit"  >
                                                                    <SendIcon style={{ color: "#4CAF50" }} />
                                                                </Fab>
                                                            </ExpandMore>
                                                        </div>
                                                    </div>
                                                </form>
                                            </CardContent> : ""}
                                    </Collapse>
                                    <div className={questions?.length > 0 ? "questions shadow" : "questionsA"}>
                                        {questions?.map((item) => {
                                            return (
                                                <Card sx={{ maxWidth: 390, margin: "6px" }}>
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar sx={{ bgcolor: red[500] }} /* aria-label="recipe" */>
                                                                {item.user.from !== "Seoma" ?
                                                                    <img src={item.user.img} alt="login" />
                                                                    :
                                                                    item.user.img}
                                                            </Avatar>
                                                        }
                                                        title={item.user.name.charAt(0).toUpperCase() + item.user.name.slice(1)}
                                                        subheader={item.date + "h" + " from " + item.user.from}

                                                    />
                                                    <CardContent>
                                                        {user?.datosUser.id === item.user._id ?
                                                            edit ?
                                                                <Typography variant="body2" color="text.secondary">
                                                                    {item.questions}
                                                                </Typography> :
                                                                <input variant="body2" color="text.secondary"
                                                                    defaultValue={item.questions}
                                                                    onChange={inputText}
                                                                    style={{ width: "100%", height: 70 }} >
                                                                </input>
                                                            : <Typography variant="body2" color="text.secondary">
                                                                {item.questions}
                                                            </Typography>
                                                        }
                                                    </CardContent>
                                                    {user?.datosUser.id === item.user._id ?
                                                        edit ?
                                                            <Box sx={{ height: 40, transform: 'translateZ(0px)', flexGrow: 1 }}>
                                                                <SpeedDial
                                                                    ariaLabel="SpeedDial"
                                                                    sx={{ position: 'absolute', bottom: 10, right: 5 }}
                                                                    icon={<MoreVertIcon />}
                                                                    direction="left"
                                                                >
                                                                    {actions.map((action) => (
                                                                        <SpeedDialAction sx={{ bgcolor: "#4CAF50", color: "white" }}
                                                                            key={action.name}
                                                                            icon={action.icon}
                                                                            tooltipTitle={action.name}
                                                                            onClick={() => deleteEdit(item._id, action.name)}
                                                                        />
                                                                    ))}
                                                                </SpeedDial>
                                                            </Box> :
                                                            <div>
                                                                <ExpandMore
                                                                    // expand={expanded}
                                                                    //  onClick={handleExpandClick}
                                                                    aria-expanded={expanded}
                                                                    aria-label="SendIcon"
                                                                    onClick={() => editQuestions("x")}
                                                                >
                                                                    <ClearIcon style={{ color: "#4CAF50" }} aria-expanded={expanded} />
                                                                </ExpandMore>

                                                                <div style={{ display: "flex", justifyContent: "right", marginRight: "5px", marginBottom: "5px" }}>
                                                                    <Fab sx={{ bgcolor: "#4CAF50", margin: "2px" }} aria-label="SendIcon" aria-expanded={expanded} onClick={() => editQuestions(item._id)}>
                                                                        <SendIcon />
                                                                    </Fab>
                                                                </div>
                                                            </div>
                                                        : ""
                                                    }
                                                </Card>)
                                        })}
                                    </div >
                                    <CardActions>
                                        {user && !expanded ?
                                            <ExpandMore
                                                // expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <Fab color="white" aria-label="CommentIcon" sx={{ bgcolor: "white" }}>
                                                    <CommentIcon sx={{ color: "#4CAF50" }} />
                                                </Fab>
                                            </ExpandMore> : ""}
                                    </CardActions>

                                </>
                            </div>



                        </div>
                    )
                }) : ""}
        </>
    )
}
export default Equipment 