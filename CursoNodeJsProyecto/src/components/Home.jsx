import Search from "./Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../commons/Card";
import CardActor from "../commons/CardActor";
import "../Style/Home.css";
import { useSearchParams } from "react-router-dom";
import { BuildUrl } from "../BuilderUrl/BuilderUrlParams";
import { ClipLoader } from 'react-spinners'; 

const Home = () => {
  const [searchParams] = useSearchParams();
  const media = searchParams.get("media") || "movie";
  const categoria = searchParams.get("categoria");
  const value = searchParams.get("value");
  const actorId = searchParams.get("actorId");

  const [populars, setPopulars] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = BuildUrl(media, categoria, value, actorId);
        const response = await axios.get(url);
        if (media === "person" && actorId) {

          setPopulars(response.data.cast);
        } else {
    
          setPopulars(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setLoading(false);  
      }
    };
    fetchData();
  }, [media, categoria, value, actorId]); 
  if (loading) {
    return (
      <div className="loader-contenedor-home">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }
  return (
    <>
      <Search media={media} />
      <div className="contenedor-home">
        <div className="contenedor-titulo">
          <h1>
            {media.charAt(0).toUpperCase() +
              media.slice(1).toLowerCase()}{" "}
            {!categoria ? "Populars" : categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()}
          </h1>
        </div>
        <div className="contenedor-film">
        {populars.map((data) => {
          if (media === "person" && !actorId) {
            return <CardActor data={data} key={data.id} />;
          } else {
            let mediaValue = media === "person" ? "movie" : media;
            return <Card data={data} media={mediaValue} key={data.id} />;
          }
        })}
        </div>
      </div>
    </>
  );
};

export default Home;
