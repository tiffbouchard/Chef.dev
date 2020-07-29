import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import profileService from "../../utils/profileService";
import postsService from "../../utils/postsService";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import ProfilePage from "../../pages/ProfilePage/Profile";
import NewPostPage from "../NewPostPage/NewPostPage";
import { makeStyles } from "@material-ui/core/styles";
import NewProfileForm from "../../components/NewProfileForm/NewProfileForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: profileService.getProfile(),
      // posts: postsService.create(),
      allPosts: [],
    };
  }

  handleLogout = () => {
    console.log(this.state.profile);
    profileService.logout();
    console.log(this.state.profile);
    this.setState({ profile: null });
    console.log(this.state.profile);
  };

  handleSignupOrLogin = () => {
    this.setState({ profile: profileService.getProfile() });
  };

  handleCreatePost = () => {
    this.setState({ posts: postsService.create() });
  };

  async componentDidMount() {
    const response = await fetch("/api/posts/all");
    const data = await response.json();
    this.setState({ allPosts: data });
    console.log(this.state.allPosts);
  }

  render() {
    return (
      <div>
        <NavBar handleLogout={this.handleLogout} profile={this.state.profile} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage allPosts={this.state.allPosts} />}
          />

          <Route
            exact
            path="/post/new"
            render={({ history }) => (
              <NewPostPage
                history={history}
                handleCreatePost={this.handleCreatePost}
                profile={this.state.profile}
              />
            )}
          />

          <Route exact path="/post/:id" render={() => <DetailPage />} />

          <Route
            exact
            path="/profile"
            render={() => <ProfilePage profile={this.state.profile} />}
          />

          <Route
            exact
            path="/profile/new"
            render={() => <NewProfileForm profile={this.state.profile} />}
          />

          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
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
        </Switch>
      </div>
    );
  }
}

export default App;
