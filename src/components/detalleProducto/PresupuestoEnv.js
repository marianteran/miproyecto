import React, { useEffect, useState } from "react";
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import "./app.css"
import swal from 'sweetalert'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const PresupuestoEnv = (props) => {
   
    const [{ user, favorites }, dispatch] = useStateValue()
    const [reload, setReload] = useState(false)   
    const [questions, setQuestions] = useState()
  
    let date = ""
  

    const submitQuestions = async (items) => {       
        swal({
            title: "questions sent",
            icon: "success",
            buttons: "ok"
        })
        fecha()
        let valor = [...items].toString()

        const dataQuestions = {
            equipment: props.app._id,
            user: user.datosUser.id,
            message:"I want to consult for a web page that includes these functions"+valor,
            date: date
        }
        await axios.post("http://localhost:4000/api/questions", { dataQuestions })
            .then(response => {
               
            })
        setReload(!reload)
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
        <div style={{marginTop:"20vh"}}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <div>{user?user.datosUser.email:""}</div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <div>{user?user.datosUser.name:""}</div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">User</label>
                <div>{user?user.datosUser.id:""}</div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"></label>                
                <textarea className="form-control" id="exampleFormControlTextarea1" value={"  I want to consult for a web page that includes these functions"} rows="3">
              
                </textarea>
                <div>
                {props.checked?.map((item)=>{
                    return(
                        <ul>
                            <li style={{backgroundColor:"gray"}}>
                                {item}
                            </li>
                        </ul>
                    )
                }) }
                </div>
                <button  onClick={()=>submitQuestions(props.checked)} type="button" class="btn btn-primary">Send question</button>
   
            </div>
            </div>
        </>
    )
}
export default PresupuestoEnv
