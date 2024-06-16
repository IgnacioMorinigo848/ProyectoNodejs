import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

function Category({media}) {
  const [Populars, setPopulars] = useState([]);
  const {categoria } = useParams();

  useEffect(() => {
    
     axios.get(
       `https://api.themoviedb.org/3/${media}/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
     )
     .then(res=>setPopulars(res.data.results))
     
 }, []);
 
  return (
    <>
   
      <div className="container text-center">


        <h1 className="pt-5">Popular {media}</h1>
       
        <div>
          {Populars.map((data) => (
            <Card data={data} media={media} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;