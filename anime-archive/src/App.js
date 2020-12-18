import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Closerlook from "./pages/Closerlook/Closerlook.js";
import { Footer } from "./components/footer/Footer.js";
import Search from "./pages/Search/Search.js";
import Characters from "./pages/Characters/Characters";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <div className="primaryContent">
          <Home />
        </div>
        <Footer />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/closerlook">
        <Closerlook />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
    </div>
  );
}

export default App;
