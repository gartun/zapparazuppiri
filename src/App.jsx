import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Document from "./screens/Document";
import TaxNo from "./screens/TaxNo";
import PrivateRoute from "./screens/PrivateRoute";
import PublicRoute from "./screens/PublicRoute";

import Login from "./screens/Login";

function App() {

  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute path="/doc/:id" component={Document} />
        <Route exact path="/tax" component={TaxNo} />
      </Switch>
    </main>
  );
}

export default App;
