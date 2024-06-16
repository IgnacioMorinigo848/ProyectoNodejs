import React from "react";
import "../Style/Card.css";
import anonimoImage from '../assets/anonimo.jpg'
import { Link } from "react-router-dom";

const CardActor = ({ data }) => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);


  return (

    <div className="contenedor-card" key={data.id}>
      <div className="card ">
        <Link to={`/home?media=person&actorId=${data.id}`}>
          {
            data.profile_path ? <img
              src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
              className="card-img-top"
              alt="..."
            /> :
              <img
                src={anonimoImage}
                className="card-img-top"
                alt="..."
              />
          }
        </Link>

        <div className="card-body">
          <h5 className="card-title">{data.original_name}</h5>
          <p className="card-text">{data.known_for_department}</p>
        </div>

      </div>
    </div>
  );
};

export default CardActor;
