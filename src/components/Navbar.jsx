import './styles/Navbar.css';
import { useState, useContext } from "react";

// CONTEXT
import { AuthContext } from "../context/auth.context";

// COMPONENTS
import { BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const { logOutUser, user } = useContext(AuthContext);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div id="navbar">
      <Link to="/" className="logo">
	<img alt="critterpedia" src="assets/icons/critterpedia-purple.png"/>
	<span className="sliding-text">ACNH companion</span>
      </Link>

      {user &&
       <div className="userOptions">

	 <Link onClick={toggleMenu}>
	   <img alt="profilePictire" src={user.picture}/>
	 </Link>

	 {showMenu &&
	  <select name="userMenu" id="user-menu">
	    <option value="profile">
	      <Link to={"/user/" + user.username}>My profile</Link>
	    </option>

	    <option value="logOut">
	      <Link onClick={logOutUser}>Log out <BsArrowBarRight/></Link>
	    </option>
	  </select>
	 }
       </div>
      }

    </div>
  );
}

export default Navbar;