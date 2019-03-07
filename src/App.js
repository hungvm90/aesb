import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Success from "./Success";
import Failure from "./Failure";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Homepage} />
        <Route path="/chuc-mung/" component={Success} />
        <Route path="/sai-roi/" component={Failure} />
      </div>
    </Router>
  );
}

export default AppRouter;
