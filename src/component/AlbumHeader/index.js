import React from "react";
import data from "../Data/index";
import Page from "../Page";

const renderHeader = () => {
  return data.map((album) => {
    return (
      <Page
        image={album.album.images[0].url}
        title={album.name}
        artist={album.artists[0].name}
        url={album.artists[0].uri}
        key={album.id}
      />
    );
  });
};

export const AlbumHeader = () => {
  return <div>{renderHeader()}</div>;
};
