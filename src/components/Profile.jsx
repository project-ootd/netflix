import React, { useEffect } from "react";
import "../styles/Profile.css";

import { useState } from "react";
import ProfileMain from "./ProfileMain";
import ProfileSub from "./ProfileSub";
import ProfileIcon from "./ProfileIcon";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const [click, setClick] = useState(false);
  const [subclick, setSubclick] = useState(false);
  const [profileUser, setProfileUser] = useState({});

  const [profileIndex, setProfileIndex] = useState(-1);

  useEffect(() => {
    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/getProfile`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setProfileUser(data.data);
    };
    getProfile();
  }, [subclick]);
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
          <ProfileIcon
            setSubclick={setSubclick}
            subclick={subclick}
            profileUser={profileUser}
            profileIndex={profileIndex}
          />
        ) : (
          <ProfileSub
            setClick={setClick}
            setSubclick={setSubclick}
            subclick={subclick}
            profileUser={profileUser}
            profileIndex={profileIndex}
          />
        )
      ) : (
        <ProfileMain
          setClick={setClick}
          click={click}
          profileUser={profileUser}
          setProfileIndex={setProfileIndex}
        />
      )}
    </div>
  );
};

export default Profile;
