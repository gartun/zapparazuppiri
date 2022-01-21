import { useState } from "react";
import { Switch, Route } from "react-router-dom";


import "./App.css";

import Home from "./screens/Home";
import Document from "./screens/Document";
import TaxNo from "./screens/TaxNo";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import Login from "./screens/Login";

function App() {

  const [token, setToken] = useState(sessionStorage.getItem("türmob-token") || "");
  console.log(token)
  return (
    <main>
      <Switch>
        <Route exact path="/tax" component={TaxNo} />
        <PublicRoute path="/login" exact token={token} >
          <Login setToken={setToken} />
        </PublicRoute>
        <PrivateRoute component={Home} path="/" exact token={token} />
        <PrivateRoute component={Document} path="/doc/:id" token={token} />
      </Switch>
    </main>
  );
}

export default App;
