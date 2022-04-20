import React, { useEffect, useState } from "react";import { useStateValue } from "../../context/Stateprovider";
import "../Administrador/administrador.css";
import swal from "sweetalert";
import axios from "axios";
import { accionType } from '../../context/reducer';



const Notificaciones = () => {
  const [{ user, equipments, notifica }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);
  const [questions, setQuestions] = useState() 
  const [changeQuestions, setChangeQuestions] = useState()
  
  let date = ""

  useEffect(() => {
      axios.get("http://localhost:4000/api/questions/")
          .then(response => {
            let temporal = []
              response.data.response.questions.map((item)=>{
                if(!item.answer){
                  return(
                    temporal.push(item)
                  )
                }} )                          
              setQuestions(temporal)             
              setReload(!reload)
              dispatch({
                type: accionType.NOTIFICA,
                notifica: questions.length
              })
          })
          
  }, [reload])

  const inputText = (event) => {  
     setChangeQuestions(event.target.value)
  }


  const answerQuestions = async (id, event) => {
      event.preventDefault()
      fecha()     
      let data = changeQuestions
      let newDate = date  
          await axios.put(`http://localhost:4000/api/answer/${id}`, { data, newDate })
              .then(response => {
                setReload(!reload)                  
              })}

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10vh",
        }}
      >
        {/*NOTIFICACIONES*/}

        {questions?.map((item)=>{
          return(
            <div
            style={{
              marginLeft: "5vw",
              borderStyle: "solid",
              borderWidth: "0.5px",
              borderColor: "rgb(217, 217, 217)",
              borderRadius: "10px",
              width: "38vw",
              height:"100%",
              maxHeight: "50vh",
            }}
          >
            <h3 style={{ marginTop: "1vh", marginLeft: "1vw" }}>
              <strong>Notification #{item._id}</strong>
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "1vw",
                marginBottom: "2vw",
                marginTop: "2vw",
                borderStyle: "solid",
                borderWidth: "0.5px",
                borderColor: "rgb(217, 217, 217)",
                borderRadius: "10px",
                width: "35vw",
                height:"100%",
                maxHeight: "18vh",
              }}
            >
              <div style={{ margin: "10px" }}>
                <h6>
                  <strong>User:</strong>
                </h6>
              </div>
  
              <div style={{ margin: "8px" }}>
                <p>{item.user.name + " " + item.user.lastName + " update: " + item.date}</p>
              </div>
  
              <div style={{ margin: "10px" }}>
                <h6>
                  <strong>Message:</strong>
                </h6>
              </div>
  
              <div style={{ margin: "8px" }}>
                <p>
                {item.questions}
                </p>
              </div>
            </div>
  
            <div style={{ marginLeft: "1vw", marginRight: "2vw" }}>
              <form onSubmit={(event)=>answerQuestions(item._id, event)}>
                <input
                  type="textarea"
                  className="form-control"
                  aria-describedby="reply"
                  onChange={inputText}                 
                />
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ marginTop: "3vh", marginBottom: "2vh" }}
                  
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          )
        })}        
      </div>
    </>
  );
};

export default Notificaciones;
