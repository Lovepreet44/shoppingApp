import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop";
import SignIn from "./components/SignIn";
import Content from "./components/Content";
import Error from "./components/Error";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/content" component={Content} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
