import React from "react";
import { useState } from "react";
import "../Style/FormLog.css"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../dbSimulator'
import "../Style/FormLog.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !regexEmail.test(email)) {
      errors.email = "Invalid email";
    }
    if (!password || !password.length === 0) {
      errors.password = (
        <>
          Invalid Password. 
        </>
      );}
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //USERS
    try {
      if (validateForm()){
        const payload = loginUser({ email, password })
        localStorage.setItem("token", payload.id)
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: payload.name,
            id: payload.id,
            email: payload.email,
            lastname: payload.lastName,
          }))

          const userNoparse = localStorage.getItem("user");
          const user = JSON.parse(userNoparse);
          console.log(user.lastname)
          navigate("/home")
      }
     
    } catch {
      alert("Usuario no existe");
    }

  };



  return (
  
      <div className="principal-contenedor-form">
          <div className="contenedor-form">
          <h1 className="">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail2"
                  placeholder="Type email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                 <p className={errors.email !== "" ? "error" :"mensajeError"} id="mensajeEmail">{errors.email}</p>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Type password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className={errors.password !== "" ? "error" :"mensajeError"} id="mensajeContrasenia">{errors.password}</p>
               
              </div>
              
              <div className="botones crear-cuenta">
                  <p className="crear-cuenta" >¿You don't have an account yet?<a href="/register">Create an account</a></p>
              </div>


              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <div className="botones cambiar-contraseña">
                  <p className="crear-cuenta" ><a href="/changePassword">¿did you forget your password?</a></p>
              </div>
            </form>
          </div>
      </div>
  
  );
};

export default Login;
