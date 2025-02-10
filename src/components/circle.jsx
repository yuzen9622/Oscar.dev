import React from "react";
import { NavLink } from "react-router-dom";
function Circle({ color, text, route }) {
  return (
    <NavLink className="circle" to={route} style={{ backgroundColor: color }}>
      <p>{text}</p>
    </NavLink>
  );
}

export default Circle;
