import logo from "./logo.svg";
import "./App.css";

import data from "./component/Data/index";
import Button from "./component/Button/index";
import { Playlist } from "./page";

function App() {
  return (
    <div className="App">
      <h1>Music Playlist</h1>
      <div className="group">
        <div>
          <Playlist url={data.album.images[0].url} />
        </div>
        <Playlist
          name={data.name}
          artist={data.artists[0].name}
          album={data.album.name}
        />
        <Button />
      </div>
    </div>
  );
}

export default App;
