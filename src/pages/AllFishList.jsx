import "./styles/AllFishList.css";
import axios from "axios";
import { useState, useEffect } from "react";

// COMPONENTS
import IconList from "../components/IconList";


function AllFishList(props) {
  // Variables
  const fishURL = process.env.REACT_APP_DATALAYER_URL + "/fish";
  const [ allFish, setAllFish ] = useState(null);

  // Populates the fish list
  useEffect(() => {
    axios
      .get(fishURL)
      .then((response) => {
        setAllFish(response.data);
      });
  }, [fishURL]);


  return (
    <div id="fish-page">
      <div className="title">
	<img alt="net" src="/assets/icons/fish.png"/>
	<h3>Fish list</h3>
      </div>

      {allFish && <IconList darkMode={false} objectList={allFish} />}
    </div>
  );
}

export default AllFishList;