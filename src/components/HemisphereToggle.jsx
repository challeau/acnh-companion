import './styles/HemisphereToggle.css';
import Switch from "react-switch";

// CONTEXT

// COMPONENTS

function HemisphereToggle({showSouthernData, setShowSouthernData}) {

  return (
    <div className="hemisphere-toggle">
      <img alt="hemisphere-logo" src="/assets/icons/hemisphere.png"/>
      <Switch onChange={setShowSouthernData} checked={showSouthernData} height={20} width={45} handleDiameter={25}
	      onColor="#B38CB4" onHandleColor="#5C415D" uncheckedIcon={false} checkedIcon={false}
	      activeBoxShadow="0px 0px 1px 3px rgba(0, 0, 0, 0.2)"/>
    </div>
  );
}

export default HemisphereToggle;