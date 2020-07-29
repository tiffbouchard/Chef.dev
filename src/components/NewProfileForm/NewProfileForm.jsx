import React, { Component } from "react";
import profileService from "../../utils/profileService";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class NewProfileForm extends Component {
  state = {
    email: this.props.profile.email,
    bio: "",
    github: "",
    linkedin: "",
  };

  handleChange = (e) => {
    // this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await profileService.newProfile(this.state);
      this.props.handleSignupOrLogin();
  
      this.props.history.push("/");
      console.log(this.props.history)
    } catch (err) {
console.log(err)
    }
  };

  isFormInvalid() {
    return !(
      this.state.bio 
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>

          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                   multiline="true"
                   rows="5"
                  autoComplete="fname"
                  name="bio"
                  variant="outlined"
                  required
                  fullWidth
                  id="bio"
                  label="Bio"
                  autoFocus
                  type="text"
                  placeholder="Add Bio Here"
                  value={this.state.bio}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  fullWidth
                  id="github"
                  label="Github"
                  name="github"
                  autoComplete="lname"
                  type="url"
                  placeholder="Enter Github Url"
                  value={this.state.github}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="linkedin"
                  label="LinkedIn"
                  name="linkedin"
                  autoComplete="linkedin"
                  type="url"
                  placeholder="Enter LinkedIn Url"
                  value={this.state.linkedIn}
                  onChange={this.handleChange}
                />
              </Grid>
     
             
              <Button
                disabled={this.isFormInvalid()}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Profile
              </Button>
        
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(NewProfileForm);
