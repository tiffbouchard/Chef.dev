import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import tipsService from "../../utils/tipsService"

class TipsForm extends Component {
  state = {
    content: "",
    link: "",
    profile: this.props.profile._id,
    post: this.props.match.params.id,
    allTips: []
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
      this.props.history.push("/");
    } catch (err) {
      alert("Error")
      console.log(err)
    }
  };

  async componentDidMount() {
    const response = await fetch("/api/tips/all");
    const data = await response.json();
    this.setState({ allTips: data });
  }

  render() {
    console.log(this.props.profile)
    console.log(this.state.allTips)
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
