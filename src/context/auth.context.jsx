import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// GLOBALS
const AuthContext = React.createContext();
const verifyRoute = process.env.REACT_APP_DATALAYER_URL + "/auth/verify"


function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Stores an authentication token in the localStorage
  const storeToken = (token) => localStorage.setItem("authToken", token);

  // Removes an authentication token from the localStorage
  const removeToken = () => localStorage.removeItem("authToken");

  // Logs out the user
  const logOutUser = () => {
    removeToken();
    authenticateUser();
    navigate('/');
  };

  // Checks the localStorage for an authentication token and updates the state variables
  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      axios
	.post(verifyRoute, {token: storedToken})
	.then((response) => {
	  setIsLoading(false);
	  setIsLoggedIn(true);
	  setUser(response.data.user);
	})
	.catch((error) => {
	  setIsLoading(false);
	  setIsLoggedIn(false);
	  setUser(null);
	});
    }
    else {
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  // Keep user loged in
  useEffect(() => { authenticateUser(); }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };