import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import UserProvider from "../../context/profileContext";
import profileService from "../../utils/profileService";
import postsService from "../../utils/postsService";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import ProfilePage from "../../pages/ProfilePage/Profile";
import NewPostPage from "../NewPostPage/NewPostPage";
import NewProfileForm from "../../components/NewProfileForm/NewProfileForm";
import PublicProfile from "../../pages/ProfilePage/PublicProfile";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: profileService.getProfile(),
      allPosts: [],
      currentPost: [],
      allProfiles: [],
    };
  }

  handleLogout = () => {
    profileService.logout();
    this.setState({ profile: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ profile: profileService.getProfile() });
  };

  handleCreatePost = () => {
    this.setState({ posts: postsService.create() });
  };

  async getAllProfiles() {
    const response = await fetch("/api/profiles/all");
    const data = await response.json();
    console.log(data);
    this.setState({ allProfiles: data });
  }

  async componentDidMount() {
    this.getAllProfiles();
    const response = await fetch("/api/posts/all");
    const data = await response.json();
    this.setState({ allPosts: data });

    //   this.setState({ currentPost: postsService.getPost(id) });
    //   console.log(this.state.currentPost);
  }

  render() {
    return (
      <div>
        <UserProvider>
          <NavBar
            handleLogout={this.handleLogout}
            profile={this.state.profile}
            allPosts={this.state.allPosts}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage allPosts={this.state.allPosts} />}
            />
            <Route
              exact
              path="/post/new"
              render={({ history }) =>
                profileService.getProfile() ? (
                  <NewPostPage
                    history={history}
                    handleCreatePost={this.handleCreatePost}
                    profile={this.state.profile}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/post/:id"
              render={(props) => (
                <DetailPage
                  {...props}
                  profile={this.state.profile}
                  currentPost={this.state.currentPost}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              render={() =>
                profileService.getProfile() ? (
                  <ProfilePage profile={this.state.profile} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/profile/new"
              render={({ history }) =>
                profileService.getProfile() ? (
                  <NewProfileForm
                    history={history}
                    profile={this.state.profile}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  profiles={this.state.allProfiles}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/profile/:id"
              render={(props) => (
                <PublicProfile profile={this.state.profile} {...props} />
              )}
            />
          </Switch>
          {/* <Footer /> */}
        </UserProvider>
      </div>
    );
  }
}

export default App;
