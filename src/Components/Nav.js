import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container-fluid">
        <span
          className="navbar-brand mb-0 h1"
          onClick={() => {
            window.location.reload();
          }}
          style={{ cursor: "pointer" }}
        >
          Employee Directory
        </span>
      </div>
    </nav>
  );
}
export default Nav;
