// import { useContext } from "react";

// CONTEXT
// import { AuthContext } from "./context/auth.context";

// COMPONENTS
import Navbar from "./components/Navbar";

// PAGES
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
	<Route path="/" element={<Home />} />
	<Route path="/auth" element={<Authentication />} />
	{/* {isLoggedIn && <Route path="/profile" element={<Profile />} /> } */} 
	

	{/* <Route path="*" element={ <NotFound /> } /> */} 
      </Routes>
    </div>
  );
  
}

export default App;