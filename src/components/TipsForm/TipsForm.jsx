import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class TipsForm extends Component {
  state = {
    content: "",
    link: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await profileService.signup(this.state);
  //     // Let <App> know a user has signed up!
  //     this.props.handleSignupOrLogin();
  //     // Successfully signed up - show GamePage
  //     this.props.history.push("/");
  //   } catch (err) {
  //     // Invalid user data (probably duplicate email)
  //     this.props.updateMessage(err.message);
  //   }
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="header-image"
          label="Link"
          name="link"
          autoComplete="Link"
          autoFocus
          type="URL"
          placeholder="Link"
          value={this.state.link}
          onChange={this.handleChange}
        />
        <TextField
          multiline
          rows={10}
          rowsMax={500}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Tip"
          label="Tip"
          name="tip"
          autoComplete="Tip"
          autoFocus
          type="text"
          placeholder="Tip"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Post
        </Button>
      </form>
    );
  }
}

export default TipsForm;
