import "./styles/Profile.css";
import { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

// CONTEXT
import { AuthContext } from "../context/auth.context";

// CONSTS
const passwordURL = process.env.REACT_APP_DATALAYER_URL + "/auth/change-password";
const pictureURL = process.env.REACT_APP_DATALAYER_URL + "/auth/change-picture";
const deleteURL = process.env.REACT_APP_DATALAYER_URL + "/users/";
const headers = { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }};


function Profile(props) {
  const { user, authenticateUser, logOutUser } = useContext(AuthContext);
  const [ message, setMessage ] = useState({text: undefined, type: "error"});
  const navigate = useNavigate();
  const [ active, setActive ] = useState(0);

  // COMPONENTS
  function ChangePasswordForm(props) {
    const [ newPassword, setNewPassword ] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.patch(passwordURL, { password: newPassword }, headers)
	.then(response => {
          authenticateUser();
          setMessage({text: 'Password successfully modified.', type: 'success'});
	})
	.catch(error => {
          const errorDescription = error.response.data.message;
          setMessage({text: errorDescription, type: 'error'});
	});
    };

    return (
      <form id="changePassword" className="actionForm">
	{ message.text &&<p>{message.text}</p> }
	<label>New password</label>
	<input type="text" name="newPassword" value={newPassword}
	       onChange={event => setNewPassword(event.target.value)} />
	<button onClick={event => handleSubmit(event)}>Submit</button>
      </form>
    );
  }

  function ChangePictureForm(props) {
    const [ newPicture, setNewPicture ] = useState(user.picture);
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.patch(pictureURL, { picture: newPicture }, headers)
	.then(response => {
          authenticateUser();
          setMessage({text: "Picture successfully modified.", type: "success"});
	})
	.catch(error => {
          const errorDescription = error.response.data.message;
          setMessage({text: errorDescription, type: "error"});
	});
    };

    return (
      <form id="changePicture" className="actionForm">
	{ message.text && <p>{message.text}</p> }
	<label>New picture's URL</label>
	  <input type='url' name='newPicture' value={newPicture}
		 onChange={event => setNewPicture(event.target.value)}/>
	  <div className="preview">
            <label>Preview:</label>
            <img alt="preview" src={newPicture === '' ? 'https://i.imgflip.com/3es772.png' : newPicture}/>
            {newPicture === '' && <p className='previewText'>Waiting for your input...</p>}
	  </div>
      <button onClick={event => handleSubmit(event)}>Submit</button>
      </form>
    );
  }

  function DeleteAccountForm(props) {
    const [ errorMessage, setErrorMessage ] = useState(undefined);

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
	.delete(deleteURL + user._id, headers)
	.then(response => {
          logOutUser();
          navigate('/'); 
	})
	.catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
	});
    };
    return (
      <form id="deleteAccount" className="actionForm">
	{ errorMessage && <p className="errorMessage">{errorMessage}</p> }
	<h3><b>ATTENTION:</b> this action will delete your account permanently and log you out.</h3>
	<button onClick={event => handleSubmit(event)}>
        Delete my account</button>
      </form>
    );
  }
  
  return (
    <div id="profile">
      <div className="accountSettings">
        <ul className="accountActions">
          <h1><img id="you" alt="you" src={user.picture}/>Account Settings</h1>
          <li>
            <button className="action" onClick={() => setActive(active !== 1 ? 1 : 0)}>
            Change your password</button>
          </li>
          <li>
            <button className="action" onClick={() => setActive(active !== 2 ? 2 : 0)}>
            Change your profile picture</button>
          </li>
          <li>
            <button className="action" onClick={() => setActive(active !== 3 ? 3 : 0)}>
            Delete your account</button>
          </li>
        </ul>
        <div className="forms">
          {active === 1 && <ChangePasswordForm />}
          {active === 2 && <ChangePictureForm />}
          {active === 3 && <DeleteAccountForm />}
        </div>
      </div>
    </div>
  );
}

export default Profile;