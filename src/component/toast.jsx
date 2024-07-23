import React from "react";

function Toast({ show = false }) {
  return (
    <div
      className="toast "
      style={show ? { opacity: 1, visibility: "visible" } : {}}
    >
      <h2 className={`hiddenY ${show ? "show" : ""}`}>Contect Success</h2>
    </div>
  );
}

export default Toast;
