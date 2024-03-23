import s from "./nav-icon.module.css";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function NavIcon(props) {
  if (props.route === "home") {
    return (
      <NavLink to={"/"}>
        {(linkProps) => {
          return (
            <div
              className={linkProps.isActive ? s.container_active : s.container}
            >
              <HomeIcon width={30} height={30} />
            </div>
          );
        }}
      </NavLink>
    );
  } else if (props.route === "settings") {
    return (
      <NavLink to={"/settings"}>
        {(linkProps) => {
          return (
            <div
              className={linkProps.isActive ? s.container_active : s.container}
            >
              <Cog6ToothIcon width={30} height={30} />
            </div>
          );
        }}
      </NavLink>
    );
  }
}

export default NavIcon;