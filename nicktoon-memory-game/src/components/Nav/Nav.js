import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <div> Picture Click Game </div>
     <span className="score" id="currentScore">Current Score: {props.currentScore}</span> 
     <span className="score" id="highScore"> High Score: {props.highScore}</span>
  </nav>
);

export default Nav;