import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Donate from "./Donate";

import { Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App col-centered" style={{ width: "Auto" }}>
        <NavBar></NavBar>
        <div>
          <Route exact path="/" component={Home} />          <Route path="/donate" component={Donate} />
          
        </div>
        {/* <Route path="*">
            <NoMatch />
          </Route> */}
        {/* <Redirect from="*" to="/" /> */}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
