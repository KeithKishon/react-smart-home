
import { UserButton, useUser} from "@clerk/clerk-react";

import s from "./header.module.css"



function Header() {
  const userData = useUser();
  if (!userData.isLoaded || !userData.isSignedIn) {
    return (
      <div className={s.header}>
        <div>
          <p className={s.header_tagline}>Loading...</p>
        </div>
        <div className={s.user_img}>
          {/* <img src={ProfileImg} alt="" className={s.profile_img} /> */}
          <UserButton showName />
        </div>
      </div>
    );
  }
  const name = userData.user.firstName;

  return (
    <div className={s.header}>
      <div>
        <h1 className={s.header_heading}>Hello, {name}!</h1>
        <p className={s.header_tagline}>Your devices are under your control.</p>
      </div>
      <div className={s.user_img}>
        {/* <img src={userData.user.profileImageUrl} alt="" className={s.profile_img} /> */}
        <UserButton  />
      </div>
    </div>
  );
}


export default Header