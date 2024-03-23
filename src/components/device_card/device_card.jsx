import { PowerIcon } from "@heroicons/react/24/solid";
import s from "./device_card.module.css"
import { useState } from "react";
import PropTypes from "prop-types";

function DeviceCard(props){

    const handleclick = () => { 
      props.handleDeviceUpdate(props.device._id)
    };

    return(
    <div className={s.device_card}>
      <img src={props.device.image} alt="" className={s.device_card_img} />
      <div className={s.device_card_info}>
       <div className={s.device_card_info_container}>
        <h1 className={s.device_card_text}> {props.device.name} </h1>
        <button
          type="button"
          onClick={handleclick}
          className={props.device.state ? s.device_card_icon_on : s.device_card_icon_off}
        >
        
         <PowerIcon width={36} height={36} />

       </button>

      </div> 
    </div>
  </div>
  );
}
export default DeviceCard;