import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Document from "./screens/Document";

function App() {

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doc/:id" component={Document} />
      </Switch>
    </main>
  );
}

export default App;
