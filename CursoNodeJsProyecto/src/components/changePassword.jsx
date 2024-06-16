import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ChangePassoword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[email,setEmail] = useState("");
    const [emailValidate, setValidate] = useState(false);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const userNoparse = localStorage.getItem("user");
    const user = JSON.parse(userNoparse);

  useEffect(() => {
    if(user){
      setEmail(user.email)
      setValidate(true)
  }
  },[emailValidate])


    const validateForm = () => {
        let errors = {};
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!email || !regexEmail.test(email)) {
          errors.email = "Invalid email";
        }
    
        if (!password || !regexPassword.test(password)) {
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
        if(!password || password != confirmPassword){
            errors.confirmPassword =("Invalid Password")
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };

   
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
        navigate("/home")
        }
    }
    
    const handleSubmitEmail = (e) => {
        e.preventDefault();
        if(email){
            setValidate(true)
        }
    }

    return (
        <>
        {emailValidate ? (
          <div className="principal-contenedor-form">
          <div className="contenedor-form">
          <h1 className="">Change Password</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  placeholder="Type password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className={errors.password !== "" ? "error" :"mensajeError"} id="mensajeContrasenia">{errors.password}</p>
               
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Type new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                <p className={errors.confirmPassword !== "" ? "error" :"mensajeError"} id="mensajeContrasenia">{errors.confirmPassword}</p>
               
              </div>


              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </form>
          </div>
      </div>
        ):(
          <div className="principal-contenedor-form">
          <div className="contenedor-form">
          <h1 className="">Recupera tu cuenta</h1>
            <form onSubmit={handleSubmitEmail}>
              <div className="mb-3">
                <label className="form-label">Introduce email to find your account.</label>
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

              <button type="submit" className="btn btn-primary">
                Send email
              </button>
            </form>
          </div>
      </div>
        )
        }
        
    
        </>
    );

}