import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./MainSidebar.css";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "95%",
      margin: "10px",
    },
  },
}));

export default function MainSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/post/new"
      >
        New Post
      </Button>
      <MenuItem>Ingredients</MenuItem>
      <MenuItem>Featured</MenuItem>
      <MenuItem>Trending</MenuItem>
    </div>
  );
}
