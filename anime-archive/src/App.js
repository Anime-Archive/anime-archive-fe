import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import { Footer } from "./components/footer/Footer.js";
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
    </div>
  );
}

export default App;
