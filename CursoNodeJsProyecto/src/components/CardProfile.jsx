import React from "react";
import "../Style/CardProfile.css";
import { Link } from "react-router-dom";

const CardProfile = ({ data }) => {
  return (
    <div className="contenedor-card" key={data.id}>
      <div className="card ">
        <Link to={`/movie/${data.id}`}>
          
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              className="card-img-top"
              alt="..."
              />
          
        </Link>
      </div>
    </div>
  );
};

export default CardProfile;
