import React from "react";
import data from "../Data";
import { Button } from "../Button";
import { AlbumImages } from "../AlbumDetail/AlbumImages";
import { AlbumTitle } from "../AlbumDetail/AlbumTitle";
import { AlbumArtists } from "../AlbumDetail/AlbumArtists";

const Page = ({ image, title, artist, url }) => {
  return (
    <div>
      <AlbumImages image={image} />
      <AlbumTitle title={title} />
      <AlbumArtists artist={artist} />
      <Button url={url} />
    </div>
  );
};

export default Page;
