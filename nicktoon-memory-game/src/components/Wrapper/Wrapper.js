import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper border border-dark">{props.children}</div>;

export default Wrapper;