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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/search" component={Search} />
      <Route exact path="/closerlook/:id" component={Closerlook} />
      <Route path="/closerlook/:id/characters" component={Characters} />
    </div>
  );
}

export default App;
