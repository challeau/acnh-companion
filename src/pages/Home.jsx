import { Link } from "react-router-dom";
// import { useState } from "react";

import "./styles/Home.css"

// CONTEXT
// import { AuthContext } from '../context/auth.context';

// COMPONENTS

function Home(props) {
  // let [contentType, setContentType] = useState(null);
  // const { user } = useContext(AuthContext);

  return (
    <div id="home">
      <div className="container-row presentation">
	<img alt="Bob" src="assets/bob-face-round.png" />

	<div className="container-column">
	  <h3 className="title">Welcome to ACNH companion !</h3>
	  <p>Our tools are here to help you keep track of items and collections, and to hunt efficiently.</p>
	  <p>With an account, you can register new entries in your Crittepedia and visualize at a glance the critters you're missing.</p>
	  <div className="button-box">
	    <Link to="/auth" style={{maxHeight: "1px"}}>
              <button className="round-purple">Sign up</button>
            </Link>
	    <Link to="/auth" style={{maxHeight: "1px"}}>
              <button className="round-purple">Log in</button>
            </Link>
	  </div>
	</div>
      </div>

      <div className="container-row tools">
	<h3 className="title"><span>Tools</span></h3>
	<div className="fishing">
	  
	</div>
	<div className="bug-catching">bug catching</div>

	
	
      </div>
    </div>
  );
}

export default Home;