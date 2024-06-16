import React, { useEffect, useState } from "react";
import { getFavorites, getWatchLater, getVistas } from "../dbSimulator";
import CardProfile from "./CardProfile";
import "../Style/Profile.css";

const Profile = () => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const [favorito, setFavorito] = useState([]);
  const [verDespues, setVerDespues] = useState([]);
  const [vistas, setVistas] = useState([]);

  useEffect(() => {
    const fetchList = () => {
      setFavorito(getFavorites(user.id));
      setVerDespues(getWatchLater(user.id));
      setVistas(getVistas(user.id));
    };

    fetchList();
  }, []);

  return (

    <div className="contenedor-profile">
      <div className="user"> 
        <p>Profile {user.name} {user.lastname}</p>
      </div>
      <div className="contenedor-all-card">
        <h1 className="titulo-card-profile">Favorites</h1>
        <div className="contenedor-card-profile">
          {favorito.map((data, i) => (
            <CardProfile data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="contenedor-all-card">
        <h1 className="titulo-card-profile">To Watch</h1>
        <div className="contenedor-card-profile">
          {verDespues.map((data, i) => (
            <CardProfile data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="contenedor-all-card">
        <h1 className="titulo-card-profile">Views</h1>
        <div className="contenedor-card-profile">
          {vistas.map((data, i) => (
            <CardProfile data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
