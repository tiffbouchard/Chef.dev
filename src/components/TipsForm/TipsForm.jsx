import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import tipsService from "../../utils/tipsService"
import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root: {
    margin: "10px",
  },

}));

class TipsForm extends Component {
  state = {
    content: "",
    useful: "",
    link: "",
    profile: this.profileState,
    post: this.props.match.params.id,
  };

  profileState = () => {
    if (this.props.profile._id) {
      return this.props.profile._id;
    } else {
      return null;
    }
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
      window.location.reload(true);
    } catch (err) {
      alert("Error");
      console.log(err);
    }
  };

  render() {
<<<<<<< HEAD
    const { classes } = this.props;
=======
    console.log(this.props.profile);
    console.log(this.state.allTips);
>>>>>>> 7a81d5a34317666e93e0afbd30f9663c0990d5b3
    return (
      <form onSubmit={this.handleSubmit} >
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

        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.form}>
          Post
        </Button>
      </form>
    );
  }
}

export default withStyles(useStyles)(TipsForm);
