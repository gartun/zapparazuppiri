import { Switch, Route } from "react-router-dom";

import useToken from "./useToken";

import "./App.css";

import Home from "./screens/Home";
import Document from "./screens/Document";
import TaxNo from "./screens/TaxNo";

import Login from "./screens/Login";

function App() {
  const { token, setToken } = useToken();

  return (
    <main>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/doc/:id" component={Document} />
          <Route exact path="/tax" component={TaxNo} />
        </Switch>
      )}
    </main>
  );
}

export default App;
