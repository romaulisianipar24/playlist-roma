import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CreatePlayList from "./page/createPlaylist";
import Login from "./page/login";
import { useSelector } from "react-redux";
import Navbar from "./Component/Navbar";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <HomePageHeader />
          <div>
            <Navbar />
            <Switch>
              <Route path={"/create-playlist"}>
                {isLogin ? <CreatePlayList /> : <Redirect to={"/"} />}
              </Route>
              <Route path={"/"}>
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
