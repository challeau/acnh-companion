import './styles/Navbar.css';
import { useContext } from "react";

// CONTEXT
import { AuthContext } from "../context/auth.context";

// COMPONENTS
import { BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Navbar(props) {
  const { logOutUser, user } = useContext(AuthContext);

  return (
    <div id="navbar">
      <Link to="/" className="logo">
	<img alt="critterpedia" src="/assets/icons/critterpedia-purple.png"/>
	<span className="sliding-text">ACNH companion</span>
      </Link>

      {user &&
       <div className="userOptions">
	 <Link to="/profile"><img alt="profilePictire" src={user.picture}/></Link>
	 <Link onClick={logOutUser}>Log out <BsArrowBarRight/></Link>
       </div>
      }

    </div>
  );
}

export default Navbar;