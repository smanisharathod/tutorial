import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
