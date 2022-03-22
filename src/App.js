import logo from './logo.svg';
import './App.css';

import data from './component/loadData';
import Button from './component/button';

function App() {
  return (
    <div className="App">
    <h1>Track Info</h1>
    <div className='group'>
      <div>
        <img src={data.album.images[0].url} width="300" height="300" className="rotate" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.artists[0].name} : {data.album.name}</h3>
        <Button />
      </div>
    </div>
  </div>
);
}

export default App;
