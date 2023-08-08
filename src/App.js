import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

// CONTEXT
import { AuthContext } from "./context/auth.context";

// COMPONENTS
import Navbar from "./components/Navbar";

// PAGES
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import AllFishList from "./pages/AllFishList";
import AvailableFish from "./pages/AvailableFish";
import AllInsectsList from "./pages/AllInsectsList";
import AvailableInsects from "./pages/AvailableInsects";
import Profile from "./pages/Profile";


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
	<Route path="/" element={<Home />} />

	<Route path="/auth" element={<Authentication />} />

	<Route path="/fish" element={<AllFishList />} />
	<Route path="/fish/all" element={<AllFishList />} />
	<Route path="/fish/available" element={<AvailableFish />} />

	<Route path="/insects" element={<AllInsectsList />} />
	<Route path="/insects/all" element={<AllInsectsList />} />
	<Route path="/insects/available" element={<AvailableInsects />} />
	{isLoggedIn && <Route path="/profile" element={<Profile />} /> }

      </Routes>
    </div>
  );
}

export default App;