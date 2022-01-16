import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Document from "./screens/Document";
import TaxNo from "./screens/TaxNo";

function App() {

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doc/:id" component={Document} />
        <Route exact path="/tax" component={TaxNo} />
      </Switch>
    </main>
  );
}

export default App;
