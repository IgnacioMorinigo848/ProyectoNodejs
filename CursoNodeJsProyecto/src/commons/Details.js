import React from "react";
import "../Style/Details.css"

const Details = ({ data,media }) => {
  return (
    <>
      <div className="contenedor-details">
        <div className="contenedor-img-details">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt="..."
          />
        </div>
        <div className="contenedor-text-details">
          <div className="contenedor-titulo-details"> <h1>{media === "tv" ? data.name:data.title + " ( " + data.release_date + " )"}</h1></div>
          <div className="contendor-informacion-titulo"><h5>{data.overview}</h5></div>
          <div className="contenedor-popularidad">  <h1 >Popularity: {data.popularity}</h1></div>
          <div className="home-page-details"><a href={`${data.homepage}`} >Home Page of {data.title}</a></div>
        </div>
      </div>
    </>
  );
};

export default Details;