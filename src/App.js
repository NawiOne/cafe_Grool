import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeMenu from "./pages/home-menu";
import History from "./pages/history"


const AppRouter = () =>{
  return (
    <Router>
      <Route path="/" exact component={HomeMenu} />
      <Route path="/history" component={History} />
    </Router>
  )
}

export default AppRouter;
