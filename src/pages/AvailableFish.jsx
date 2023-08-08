import "./styles/AvailableFish.css";
import axios from "axios";
import { useState, useEffect } from "react";

// COMPONENTS
import IconList from "../components/IconList";
import HemisphereToggle from "../components/HemisphereToggle";


function AvailableFish(props) {
  // Variables
  const northernFishURL = process.env.REACT_APP_DATALAYER_URL + "/fish/available/northern";
  const southernFishURL = process.env.REACT_APP_DATALAYER_URL + "/fish/available/southen";
  const [ availableFish, setAllFish ] = useState(null);
  const [ showSouthernData, setShowSouthernData ] = useState(false);

  // Populates the fish list
  useEffect(() => {
    axios
      .get(showSouthernData ? southernFishURL : northernFishURL)
      .then((response) => {
        setAllFish(response.data);
      });
  }, [showSouthernData, southernFishURL, northernFishURL]);


  return (
    <div id="available-fish">
      <div className="title">
	<img alt="net" src="/assets/icons/fishing-rod.png"/>
	<h3>Fish available right now:</h3>
      </div>

      <div className="toggle-container">
	<HemisphereToggle showSouthernData={showSouthernData}
			  setShowSouthernData={setShowSouthernData}/>
      </div>

      {availableFish && <IconList darkMode={true} objectList={availableFish} />}
    </div>
  );
}

export default AvailableFish;
