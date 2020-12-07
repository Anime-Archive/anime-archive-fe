import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Search from "./pages/Search/Search.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
}

export default App;
