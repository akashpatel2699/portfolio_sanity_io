import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Certification from "./components/Certification";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Project} path="/project" />
        <Route component={Certification} path="/certification" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
