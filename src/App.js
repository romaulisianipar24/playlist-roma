import logo from "./logo.svg";
import "./App.css";

import { AlbumHeader } from "./component/AlbumHeader";
import { AlbumArtists } from "./component/AlbumDetail/AlbumArtists";

function App() {
  return (
    <div className="mainPage">
      <center>
        <h1 className="judul">Music Playlist</h1>
      </center>
      <div
        className="group"
        style={{
          backgroundColor: "grey",
          border: "green",
          padding: "10px",
          margin: "auto",
          width: "50%",
          border: "3px solid green",
          display: "block",
          textAlign: "center",
        }}
      >
        <AlbumHeader />
      </div>
    </div>
  );
}

export default App;
