import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../dbSimulator"
import "../Style/FormLog.css"

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {

    let errors = {}
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length < 2) {
      errors.name = "Invalid name";
    } if (!lastname || lastname.length < 2) {
      errors.lastname = "Invalid Last name";
    } if (!email || regexEmail.test(email.value)) {
      errors.email = "Invalid email";
    } if (!password || regexPassword.test(password.value)) {
      errors.password = (
        <>
          Debe tener al menos 8 caracteres.<br />
          Incluir al menos una letra minúscula (a-z).<br />
          Incluir al menos una letra mayúscula (A-Z).<br />
          Contener al menos un número (0-9).<br />
          Contener al menos un carácter especial, como @, #, $, %, &, *, etc.
        </>
      );
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;


  }

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        createUser(name, lastname, email, password);
        navigate('/login')
      }

    } catch {
      alert("Usuario no existe")
    }
  };

  return (
    <>
      <div className="principal-contenedor-form">
        <div className=" contenedor-form" >
          <h1 className="">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <input id="nombre"
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) =>setName(e.target.value)}
                value={name}
              />
              <p className={errors.name !== "" ? "error" :"mensajeError"} id="mensajeNombre">{errors.name}</p>
            </div>
            <div className="col-auto">
              <input id="Last Name"
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
              />
              <p className={errors.lastname !== "" ? "error" :"mensajeError"} id="mensajeApellido">{errors.lastname}</p>
            </div>
            <div className="col-auto">
              <input id="email"
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className={errors.email !== "" ? "error" :"mensajeError"} id="mensajeEmail">{errors.email}</p>
            </div>
            <div className="col-auto">
              <label className="visually-hidden">Contraseña</label>
              <input id="contrasenia"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
               <p className={errors.password !== "" ? "error" :"mensajeError"} id="mensajeContrasenia">{errors.password}</p>
            </div>
           
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default Register;
