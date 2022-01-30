import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./screens/Home";
import Document from "./screens/Document";
import TaxNo from "./screens/TaxNo";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import MyNavLink from "./components/MyNavLink";

import Login from "./screens/Login";

function App() {
  const [token, setToken] = useState(
    sessionStorage.getItem("türmob-token") || ""
  );

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <MyNavLink to="/tax">Vergi Numarası Kayıt</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/docs">Belgeler</MyNavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/tax" component={TaxNo} />
          <PublicRoute path="/login" exact token={token}>
            <Login setToken={setToken} />
          </PublicRoute>
          <PrivateRoute
            component={Home}
            path={["/", "/docs"]}
            exact
            token={token}
          />
          <PrivateRoute component={Document} path="/docs/:id" token={token} />
        </Switch>
      </main>
    </>
  );
}

export default App;
