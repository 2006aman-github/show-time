import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div id="navbar">
      <h2>Show Time</h2>
      {/* <div>Home</div> */}
      <button onClick={() => setSignedIn(!signedIn)}>
        {signedIn ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}

export default Navbar;
