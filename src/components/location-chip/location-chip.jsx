import s from "./location-chip.module.css";

function LocationChip(props) {
  
  const isSelected = props.location === props.selectedLocation  ? true : false; /* when looping through all of the locations in the locations array if one of the locations is equal to the selected location according to the state do something */

  const handleClick = () => {
    props.handleLocationSelect(props.location)
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isSelected ? s.button_selected : s.button_not_selected}
    >
      {props.location}
    </button>
  );
}

export default LocationChip;

