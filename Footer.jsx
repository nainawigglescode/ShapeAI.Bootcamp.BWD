import React from "react";

function Footer () {
  var curYr = new Date().getFullYear();
  return ( 
    <footer> 
      <p> Copyright @ {curYr} </p>
    </footer>
  );
}
export default Footer;