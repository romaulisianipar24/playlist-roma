import React from "react";

export const Button = ({ url }) => {
  return (
    <button className="button">
      <a href={url}>Select</a>
    </button>
  );
};
