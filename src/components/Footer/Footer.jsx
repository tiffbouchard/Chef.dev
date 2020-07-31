import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "static",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography color="inherit">copyright 2020</Typography>
    </footer>
  );
}
