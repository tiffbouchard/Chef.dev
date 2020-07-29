import React from "react";
import "./Feed.css";
import Posts from "../Posts/Posts";

const Feed = (props) => {
  return (
    <div>
      <Posts className="feed" allPosts={props.allPosts} />
    </div>
  );
};

export default Feed;
