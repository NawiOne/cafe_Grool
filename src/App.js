import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomeMenu from "./pages/home-menu";

const AppRouter = () =>{
  return (
    <Router>
      <Route path="/" exact component={HomeMenu} />
    </Router>
  )
}

export default AppRouter;
