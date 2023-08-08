import "./styles/AllInsectsList.css";
import axios from "axios";
import { useState, useEffect } from "react";

// COMPONENTS
import IconList from "../components/IconList";


function AllInsectsList(props) {
  // Variables
  const insectsURL = process.env.REACT_APP_DATALAYER_URL + "/insects";
  const [ allInsects, setAllInsects ] = useState(null);

  // Populates the insects list
  useEffect(() => {
    axios
      .get(insectsURL)
      .then((response) => {
        setAllInsects(response.data);
      });
  }, [insectsURL]);


  return (
    <div id="insects-page">
      <div className="title">
	<img alt="net" src="/assets/icons/butterfly.png"/>
	<h3>Insects list</h3>
      </div>

      {allInsects && <IconList darkMode={false} objectList={allInsects} />}
    </div>
  );
}

export default AllInsectsList;