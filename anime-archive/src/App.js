import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Closerlook from "./pages/Closerlook/Closerlook.js";
import Search from "./pages/Search/Search.js";
import Characters from "./pages/Characters/Characters";
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
      <Route exact path="/closerlook/:id">
        <Closerlook />
      </Route>
      <Route path="/closerlook/:id/characters">
        <Characters />
      </Route>
    </div>
  );
}

export default App;
