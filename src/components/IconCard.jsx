import './styles/IconCard.css';

// CONTEXT

// COMPONENTS

function IconList({colorMode, object}) {

  return (
    <div className={"icon-card " + colorMode}>
      <img alt={object.name + "-icon"} src={object.icon_uri} />

      <div className="info">
	<h3 className="name">{object.display_name}</h3>
	<div className="price">
	  <img alt="bells" src="/assets/icons/bells.png"/>
	  <span>{object.price}</span>
	</div>

	<div className="location">
	  <img alt="map" src="/assets/icons/map.png"/>
	  <span>{object.location}</span>
	</div>	
      </div>
    </div>
  );
}

export default IconList;