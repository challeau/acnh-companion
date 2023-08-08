import "./styles/AvailableInsects.css";
import axios from "axios";
import { useState, useEffect } from "react";

// COMPONENTS
import IconList from "../components/IconList";
import HemisphereToggle from "../components/HemisphereToggle";


function AvailableInsects(props) {
  // Variables
  const northernInsectsURL = process.env.REACT_APP_DATALAYER_URL + "/insects/available/northern";
  const southernInsectsURL = process.env.REACT_APP_DATALAYER_URL + "/insects/available/southen";
  const [ availableInsects, setAllInsects ] = useState(null);
  const [ showSouthernData, setShowSouthernData ] = useState(false);

  // Populates the insects list
  useEffect(() => {
    axios
      .get(showSouthernData ? southernInsectsURL : northernInsectsURL)
      .then((response) => {
        setAllInsects(response.data);
      });
  }, [showSouthernData, southernInsectsURL, northernInsectsURL]);


  return (
    <div id="available-insects">
      <div className="title">
	<img alt="net" src="/assets/icons/net.png"/>
	<h3>Insects available right now:</h3>
      </div>

      <div className="toggle-container">
	<HemisphereToggle showSouthernData={showSouthernData}
			  setShowSouthernData={setShowSouthernData}/>
      </div>

      {availableInsects && <IconList darkMode={true} objectList={availableInsects} />}
    </div>
  );
}

export default AvailableInsects;
