import React from "react";
import "./Profile.css";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserPosts from "../../components/UserPosts/UserPosts";

const Profile = (props) => {
  return (
    <div className="profilepriv">
      <UserDetails profile={props.profile} />
      <UserPosts profile={props.profile} posts={props.posts} />
    </div>
  );
};

export default Profile;
