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
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import NewProfileForm from "../../components/NewProfileForm/NewProfileForm";
=======
import { makeStyles } from "@material-ui/core/styles";
>>>>>>> 135cb2afd481b7c7bde22e4bd02ed19f87365ea6
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: profileService.getProfile(),
      posts: postsService.create(),
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

  render() {
    return (
      <div>
        <NavBar handleLogout={this.handleLogout} profile={this.state.profile} />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />

          <Route exact path="/post" render={() => <DetailPage />} />

          <Route
<<<<<<< HEAD
            exact path="/post"
            render={() => (
              <DetailPage
=======
            exact
            path="/post/new"
            render={({ history }) => (
              <NewPostPage
                history={history}
                handleCreatePost={this.handleCreatePost}
>>>>>>> a0b56e406fe24706d901477e8b989d3d3a540dc7
                profile={this.state.profile}
              />
            )}
          />

<<<<<<< HEAD
          <Route
            exact path="/profile"
            render={() => (
              <ProfilePage profile={this.state.profile}
              handleSignupOrLogin={this.handleSignupOrLogin} />
            )}
          />

        <Route
            exact path="/profile/new"
            render={() => (
              <NewProfileForm profile={this.state.profile} />
            )}
          />
=======
          <Route exact path="/profile" render={() => <ProfilePage />} />
>>>>>>> 135cb2afd481b7c7bde22e4bd02ed19f87365ea6

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
        <Footer />
      </div>
    );
  }
}

export default App;
