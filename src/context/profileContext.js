import React from "react";
import profileService from "../utils/profileService";
import postsService from "../utils/postsService";

const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    profile: profileService.getProfile(),
    allPosts: [],
  };
  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserContext };

export default UserProvider;
