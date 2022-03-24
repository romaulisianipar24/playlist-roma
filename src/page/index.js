import React from "react";

export const Playlist = (props) => {
  return (
    <div>
      <img id="gambar" src={props.url} />
      <h1>{props.name}</h1>
      <h1>{props.artist}</h1>
    </div>
  );
};
