import React from "react";

export const ButtonSelect = ({ url, isSelected, onClick, id }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "0.5rem",
        fontSize: "15px",
        backgroundColor: "#60d479",
        outline: "none",
        color: "white",
        cursor: "pointer",
        margin: "2rem 0",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={onClick}
      id={id}
    >
      {isSelected ? "Deselect" : "Select"}
    </button>
  );
};
