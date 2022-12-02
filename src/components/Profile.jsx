import React from "react";
import "../styles/Profile.css";

import { useState } from "react";
import ProfileMain from "./ProfileMain";
import ProfileSub from "./ProfileSub";
import ProfileIcon from "./ProfileIcon";

const Profile = () => {
  const [click, setClick] = useState(false);
  const [subclick, setSubclick] = useState(false);

  return (
    <div
      className={
        subclick
          ? "profile_wrap flex flex_jc_c"
          : "profile_wrap flex flex_jc_c flex_ai_c"
      }
    >
      {click ? (
        subclick ? (
          <ProfileIcon />
        ) : (
          <ProfileSub
            setClick={setClick}
            setSubclick={setSubclick}
            subclick={subclick}
          />
        )
      ) : (
        <ProfileMain setClick={setClick} click={click} />
      )}
    </div>
  );
};

export default Profile;
