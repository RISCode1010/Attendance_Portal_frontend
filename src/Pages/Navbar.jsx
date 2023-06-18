import React from "react";
import '../Styles/nav.css';
let logo = process.env.REACT_APP_LOGO_LINK;
// console.log(process.env);


function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">
          <img className="lo" src={logo} alt="" />
          <div className="heading">Let's Attend</div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
