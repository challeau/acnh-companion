import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

// CONTEXT
import { AuthContext } from '../context/auth.context';

// COMPONENTS


function Authentication(props) {
  // Variables
  const signUpURL = process.env.REACT_APP_DATALAYER_URL + "/auth/signup";
  const logInURL = process.env.REACT_APP_DATALAYER_URL + "/auth/login";
  
  const [ errorMessage, setErrorMessage ] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: "",
    username: "",
    password: "",
    picture: "",
    role: "regular_user"
  });

  const [showForm, setShowForm] = useState(false);

  // Utils
  // Toggles the form type between "signup" and "login"
  const toggleForm = (formType) => {
    if (!showForm) setShowForm(true);
    setForm({ ...form, type: formType });
  };

  // Logs in the user and saves an authToken
  const submitLogInForm = event => {
    event.preventDefault();

    axios
      .post(logInURL, form)
      .then(response => {
        storeToken(response.data?.token);
        authenticateUser();
        navigate('/'); 
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // Creates an account
  const submitSignupForm = event => {
    event.preventDefault();
    console.log(signUpURL, form);

    axios
      .post(signUpURL, form)
      .then(response => {
        console.log('response status', response.status);
        setForm(form);
      })
      .catch(error => {
	console.log(error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };


  return (
    <div id="authentication">
      <section className="">
        <h1>ACNH companion</h1>
        <div className="options">
          <h2>Sign up or log in to proceed.</h2>
          <div className="buttons">
            <button onClick={() => toggleForm("signup")}>Signup</button>
            <button onClick={() => toggleForm("login")}>Login</button>
          </div>
        </div>
      </section>

      <section>
        {showForm && form.type === "signup" && (
          <form id='signup'>
	    <h2>Create an account.</h2>
	    { errorMessage && <p className="errorMessage">{errorMessage}</p> }
	    
	    <label htmlFor="username">Username</label>
            <input type="text" name="username" value={form.username}
		   onChange={event => setForm({...form, username: event.target.value})} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={form.password}
		   onChange={event => setForm({...form, password: event.target.value})} />

            <label htmlFor="picture">Picture (as a url)</label>
            <input type="url" name="picture" value={form.picture}
		   onChange={event => setForm({...form, picture: event.target.value})} />

	    <button type="submit" onClick={event => submitSignupForm(event)}>Sign me UP!</button>
	  </form>
        )}
        {showForm && form.type.includes("login") && (
	  <form id='login'>
	    <h2>Welcome back!</h2>
	    { errorMessage && <p className="errorMessage">{errorMessage}</p> }

	    <label htmlFor="username">Username</label>
            <input type="text" name="username" value={form.username}
		   onChange={event => setForm({...form, username: event.target.value})} />

	    <label htmlFor="password">Password</label>
            <input type="password" name="password" value={form.password}
		   onChange={event => setForm({...form, password: event.target.value})} />

	    <button type="submit" onClick={event => submitLogInForm(event)}>Log in</button>
	  </form>
        )}
      </section>
    </div>
  );
}

export default Authentication;