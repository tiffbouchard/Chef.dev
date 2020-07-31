import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./MainSidebar.css";
// import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Search from "../Search/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "31px 0 10px 0",
    width: "95%",
  },
  search: {
    margin: "20px 0 0 0",
  },
}));

export default function MainSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Search allPosts={props.allPosts} />
      <Paper className={classes.search}>
        <MenuItem>Ingredients</MenuItem>
        <MenuItem>Featured</MenuItem>
        <MenuItem>Trending</MenuItem>
      </Paper>
    </div>
  );
}
