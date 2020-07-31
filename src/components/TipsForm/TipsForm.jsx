import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import tipsService from "../../utils/tipsService"

class TipsForm extends Component {
  state = {
    content: "",
    link: "",
    profile: this.props.profile._id,
    post: this.props.match.params.id
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await tipsService.create(this.state);
      // refactor to update state instead of page reload
      window.location.reload(true)

    } catch (err) {
      alert("Error")
      console.log(err)
    }
  };


  render() {
    console.log(this.props.profile)
    console.log(this.state.allTips)
    return (
      <form onSubmit={this.handleSubmit}>
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
          name="content"
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
