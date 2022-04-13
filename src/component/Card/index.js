import React, { useState } from "react";
import "../CSS/style.css";
import Button from "@mui/material/Button";

const Card = ({ title, artist, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div className="container">
      <div className="Card">
        <div className="card-wrapper">
          <img src={img} alt={title} className="card_img" />
          <h3 className="card_album">{title}</h3>
          <h3 className="card_artist">{artist}</h3>
        </div>
        <div className="btn-wrapper">
          <Button
            variant="contained"
            onClick={handleToggleSelect}
            className="btn-select"
          >
            {isSelected ? "Deselect" : "Select"}
          </Button>
          {/* <button className="btn-select" onClick={handleToggleSelect}>
            {isSelected ? "Deselect" : "Select"}
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
