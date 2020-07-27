import React, { Component } from "react";
import { Link } from "react-router-dom";
import profileService from "../../utils/profileService";

class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await profileService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.firstName &&
      this.state.lastName &&
      this.state.username &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div>
        <header>Sign Up</header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={this.state.passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <button disabled={this.isFormInvalid()}>Sign Up</button>
          {/* <Link to="/">Cancel</Link> */}
        </form>
      </div>
    );
  }
}

export default SignupForm;
