import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Details from "../commons/Details";
import { ClipLoader } from 'react-spinners';
import "../Style/MovieDetails.css"

const MovieDetails = ({ media }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
    await axios
      .get(
        `https://api.themoviedb.org/3/${media}/${movieId}?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
      )
      .then((res) => setMovie(res.data));
    }catch(error){
    console.log("Error fetching data:", error)
    }finally{
      setLoading(false);
    }
}
fetchData();
}, []);
if (loading) {
  return (
    <div className="loader-contenedor">
      <ClipLoader className="loader" size={50} color={"#123abc"} loading={loading} />
    </div>
  );
}
  return (
    <>
      <Details data={movie} media={media} />
    </>
  );
};

export default MovieDetails;