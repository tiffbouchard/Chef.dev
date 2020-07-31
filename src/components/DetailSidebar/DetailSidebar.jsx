import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0 0 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    margin: "31px 0 10px 0",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "10px",
    margin: "10px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  avatar: {
    margin: "31px 0 10px 0",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "10px",
    margin: "10px",
  },
}));

export default function DetailSideBar(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Python" },
    { key: 1, label: "jQuery" },
    { key: 2, label: " Vanilla Javascript" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  return (
    <div className={classes.root}>
      <Paper className={classes2.avatar}>
        <Avatar
          alt={props.post && props.post.profile.username}
          img="https://64.media.tumblr.com/7fe6b07e3d225070370fbfba1d389f74/ac0f7440abf44e99-20/s400x600/3eba2ad41993111163bf68efbea576174718da50.png://luseals.tumblr.com/post/620569336070963200/avatar/1.jpg"
          className={classes.large}
        />
        {props.post ? (
          <Link to={"/profile/" + props.post.profile._id}>
            <Typography variant="h5" className={classes.text}>
              {props.post && props.post.profile.username}
            </Typography>
          </Link>
        ) : null}
        <Typography variant="p" className={classes.text}>
          {props.post && props.post.profile.bio}
        </Typography>
        {props.post &&
        props.post.profile.linkedin &&
        props.post.profile.github ? (
          <Grid className={classes.text}>
            <a target="_blank" href={props.post.profile.linkedin}>
              <LinkedInIcon />
            </a>
            <a target="_blank" href={props.post.profile.github}>
              <GitHubIcon />
            </a>
          </Grid>
        ) : null}
      </Paper>

      <Paper component="ul" className={classes2.root}>
        {chipData.map((data) => {
          let icon;

          if (data.label === "React") {
            icon = <TagFacesIcon />;
          }

          return (
            <li key={data.key}>
              <Chip icon={icon} label={data.label} className={classes.chip} />
            </li>
          );
        })}
      </Paper>
    </div>
  );
}

// bio github linkedin and all the users other posts
