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

  const [profileUser, setProfileUser] = useState({});

  const [profileIndex, setProfileIndex] = useState(-1);

  // const userId = sessionStorage.getItem("email");

  // const [profileUser, setProfileUser] = useState("");

  // useEffect(() => {
  //   const getProfile = async () => {
  //     const data = await axios({
  //       url: `${BACKEND_URL}/api/v1/user/getProfile?useremail=${userId}}`,
  //       method: "GET",
  //     });
  //     console.log(data.data);
  //     // setProfileUser(data.data);
  //   };
  //   getProfile();
  // }, []);

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
