import React from "react";
import "./UserDetails.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import profileService from "../../utils/profileService";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  button: {
    margin: "20px",
  },
}));

const UserDetails = (props) => {
  const classes = useStyles();
  // const editprofile = profile.bio ? (
  //   <Button
  //     component={Link}
  //     to="/profile/new"
  //     variant="contained"
  //     color="primary"
  //   >
  //     Edit Profile
  //   </Button>
  // ) : (
  //   <Button
  //     component={Link}
  //     to="/profile/new"
  //     variant="contained"
  //     color="primary"
  //   >
  //     Create Profile
  //   </Button>
  // );

  const linkedinIcon =
    props.userpost && props.userpost[0].profile.linkedin ? (
      <a target="_blank" href={props.userpost[0].profile.linkedin}>
        <LinkedInIcon />
      </a>
    ) : null;

  const githubIcon =
    props.userpost && props.userpost[0].profile.github ? (
      <a target="_blank" href={props.userpost[0].profile.github}>
        <GitHubIcon />
      </a>
    ) : null;

  return (
    <>
      {/* {profile.firstName}
               {profile.lastName}
               {profile.username}

               {profile.email}
               {profile.bio}
               {profile.github}
               {profile.linkedin} */}
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          {/* {props.match.params.id && props.currentUser._id ? (
              <Grid className={classes.button} container justify="center">
                <Button disabled variant="outlined">
                  YOUR PUBLIC PROFILE
                </Button>
              </Grid>
            ) : null} */}
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            {props.userpost &&
              props.userpost[0].profile.firstName.toUpperCase()}
            <span>&nbsp;</span>
            {props.userpost && props.userpost[0].profile.lastName.toUpperCase()}
          </Typography>
          <Typography
            variant="h7"
            align="center"
            color="textSecondary"
            paragraph
          >
            @{props.userpost && props.userpost[0].profile.username}
          </Typography>
          <Typography
            variant="h7"
            align="center"
            color="textSecondary"
            paragraph
          >
            {props.userpost && props.userpost[0].profile.bio}
          </Typography>

          <Grid container spacing={2} justify="center">
            {githubIcon}
            {linkedinIcon}
          </Grid>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              {/* <Grid item>{editprofile}</Grid> */}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UserDetails;
