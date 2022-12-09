import React, { useEffect } from "react";
import "../styles/Profile.css";

import { useState } from "react";
import ProfileMain from "./ProfileMain";
import ProfileSub from "./ProfileSub";
import ProfileIcon from "./ProfileIcon";
import axios from "axios";
import { BACKEND_URL } from "../utils";

const Profile = () => {
  const [click, setClick] = useState(false);
  const [subclick, setSubclick] = useState(false);

  const [profileUser, setProfileUser] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/user/getProfile`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
      });
      console.log(data.data);
      setProfileUser(data.data);
      // if (data.data.userName) {
      //   setUserName(data.data.userName);
      // }
      // if (data.data.gameName) {
      //   setGameName(data.data.gameName);
      // }
    };
    getProfile();
  }, []);

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
            profileUser={profileUser}
          />
        )
      ) : (
        <ProfileMain
          setClick={setClick}
          click={click}
          profileUser={profileUser}
        />
      )}
    </div>
  );
};

export default Profile;
