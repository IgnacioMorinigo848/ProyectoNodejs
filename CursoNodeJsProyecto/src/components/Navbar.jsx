import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [estadoOptionList, setEstadoOptionList] = useState(false);
  const initialTipoContenido = localStorage.getItem("tipoContenido") || "movie";
  const [tipoContenido, setTipoContenido] = useState(initialTipoContenido);
  const [estadoVistaUser, setEstadovistaUser] = useState(false);
  const [estadoOpcionCuenta, setEstadoOpcionCuenta] = useState(false);

  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const navigate = useNavigate();
  const location = useLocation();

  const handdleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/home?media=movie");
  };

  useEffect(() => {
    localStorage.setItem("tipoContenido", tipoContenido);
  }, [tipoContenido]);

  const handleActualizarTipoContenido = (tipo) => {
    setTipoContenido(tipo);
  };

  const handdleOptionList = () => {
    setEstadoOptionList(!estadoOptionList);
  };

  const handdleEstadoVistaPrincipal = () => {
    setEstadovistaUser(!estadoVistaUser);
  };

  const handdleOpcionMiPerfil = () => {
    setEstadoOpcionCuenta(!estadoOpcionCuenta);
  };

  const media = new URLSearchParams(location.search).get("media");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/home?media=movie"} className="navbar-brand">LaRePeli</Link>

        <div className="contenedor-nav">
          <div className="header-center">
            <input type="checkbox" id="toggle-menu" />
            <label htmlFor="toggle-menu" className="hamburger">&#9776;</label>
            <ul className="primary-menu nav nav-pills">
              <li className="nav-item" onClick={() => handleActualizarTipoContenido("movie")}>
                <Link className="nav-link smoth-animation" to={`/home?media=movie`}>Movies</Link>
              </li>
              <li className="nav-item" onClick={() => handleActualizarTipoContenido("tv")}>
                <Link className="nav-link smoth-animation" to={`/home?media=tv`}>Series</Link>
              </li>
              <li className="nav-item dropdown categoria">
                <p className="nav-link smoth-animation link-p-menu-principal dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </p>
                {media === "movie" ? (
                  <ul className="dropdown-menu">
                    {["Action", "Animation", "Fiction", "Crime", "Comedy", "Fantasy", "Mystery", "Romance", "Suspense", "Drama", "Family", "Adventure", "Horror"].map((categoria) => (
                      <li key={categoria}>
                        <Link className="nav-link dropdown-item" to={`/home?media=${tipoContenido}&categoria=${categoria}`}>{categoria}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="dropdown-menu">
                    {[ "Action","Animation", "Science Fiction", "Crime", "Comedy", "Fantasy", "Mystery", "Romance", "Drama", "Family", "Adventure", "Horror"].map((categoria) => (
                      <li key={categoria}>
                        <Link className="nav-link dropdown-item" to={`/home?media=${tipoContenido}&categoria=${categoria}`}>{categoria}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link className="nav-link smoth-animation" to={"/home?media=person"}>Actors</Link>
              </li>
            </ul>
          </div>
        </div>
        {user ? (
          <>
            <div className="contenedor-menu-usuario">
              <div className="contenedor-log" onClick={handdleEstadoVistaPrincipal}> <p><FontAwesomeIcon icon={faUser} /></p></div>

              <div className={estadoVistaUser ? "contenedor-sub-menu" : "contenedor-sub-menu-oculto"}>
                <div className="contenedor-perfil">
                  <p className="dropdown-toggle" onClick={handdleOpcionMiPerfil}>Account</p>
                  <div className={estadoOpcionCuenta ? "opciones opcion-mi-cuenta" : "opcion-mi-cuenta-oculto"}>
                    <p><Link className="p-link-opcion" to={"/profile"}>Profile</Link></p>
                    <p><Link className="p-link-opcion" to={"/changePassword"}>Change Password</Link></p>
                  </div>
                </div>
                <div className="contenedor-listas">
                  <p className="dropdown-toggle" onClick={handdleOptionList}>My List</p>
                  <div className={estadoOptionList ? "opciones opcion-mis-listas" : "opcion-mis-listas-oculto"}>
                    <p><Link className="p-link-opcion" to={"/favorita"}>Favorite</Link></p>
                    <p><Link className="p-link-opcion" to={"/vistas"}>Views</Link></p>
                    <p><Link className="p-link-opcion" to={"verDespues"}>To Watch</Link></p>
                  </div>
                </div>
                <div className="opciones contenedor-loguot" onClick={handdleLogout}>
                  <p><Link className="p-link-opcion" to={"/home?media=movie"}>Logout</Link></p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline-info" type="submit">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
