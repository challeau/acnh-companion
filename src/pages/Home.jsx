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
              <button className="round-purple">Let me in !</button>
            </Link>
	  </div>
	</div>
      </div>

      <div className="container-column tools">
	<h3 className="title"><span>Tools</span></h3>

	<div className="container">
	  <div className="fishing">
	    <Link className="option" to="/fish/all">
	      <img alt="fish" src="/assets/icons/fish.png" style={{marginTop: "1em"}} />
	      <h4>All Fish</h4>
	    </Link>
	    
	    <Link className="option" to="/fish/available">
	      <img alt="fishing rod" src="/assets/icons/fishing-rod.png" />
	      <h4>Available Fish</h4>
	    </Link>
	  </div>

	  <div className="bug-catching">
	    <Link className="option" to="/insects/all">
	      <img alt="insects" src="/assets/icons/butterfly.png" />
	      <h4>All Insects</h4>
	    </Link>
	    
	    <Link className="option" to="/insects/available">
	      <img alt="net" src="/assets/icons/net.png" />
	      <h4>Available Insects</h4>
	    </Link>
	  </div>
	</div>
      </div>
    </div>
  );
}

export default Home;