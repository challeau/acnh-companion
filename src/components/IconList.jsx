import './styles/IconList.css';

// CONTEXT

// COMPONENTS
import IconCard from "./IconCard";

function IconList({darkMode, objectList}) {
  const colorMode = darkMode ? "dark" : "light";

  return (
    <div className="icon-list">
      {
	objectList.map(object => {
          return <IconCard key={object._id} object={object} colorMode={colorMode} />;
	})
      }
    </div>
  );
}

export default IconList;