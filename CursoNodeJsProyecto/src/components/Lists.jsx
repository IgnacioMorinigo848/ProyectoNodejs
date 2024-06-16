
import React, { useEffect, useState } from "react";
import { getFavorites, getWatchLater,getVistas } from "../dbSimulator";
import Card from "../commons/Card";
import "../Style/Lists.css"

const List = ({ type, title }) => {
  const [lists, setList] = useState([]);
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  useEffect(() => {
    const fetchList = () => {
      if (type === "Favorites") {
         setList(getFavorites(user.id));
      } else if (type === "VerDespues"){
         setList(getWatchLater(user.id));
      }else if (type==="Vistas"){
        setList(getVistas(user.id));
      }
      
    };

    fetchList();
  },[type, user.id]);



  return (
    <>
      <div className="contenedor-lists">
        <div className="contenedor-titulo"><h1>{title} </h1></div>
          <div className="contenedor-film">
          {lists.map((data, i) => (
            <Card data={data} media = {data.media} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
