import React from "react";
import { useState } from "react";
import "../Style/Search.css"
import { useNavigate } from "react-router"; // Cambio en la importación

export function Search({ media }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleValue = (e) => {
    setValue(e.target.value);
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/home?media=${media}&value=${value}`);
    setValue("");
  };
  return (
    
      <div
        className="  py-4 pt-5 pb-5"
      >

        <form onSubmit={handleSubmit}>
          <div className="contenedor-input">
            <input
              type="text"
              placeholder="Search"
              onChange={handleValue}
              value={value}
            />
          </div>
        </form>
      </div>
    

    
  );
};

export default Search;
