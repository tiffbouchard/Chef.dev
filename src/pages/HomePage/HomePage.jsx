import React from "react";
import postsService from "../../utils/postsService";
import Feed from "../../components/Feed/Feed";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
// import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebar: {
    backgroundColor: "grey",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={8} component={Paper}>
        <div className={classes.paper}>
          <Feed allPosts={props.allPosts} />
        </div>
      </Grid>
      <Hidden xsDown>
        <Grid item xs={3} sm={4} md={4} className={classes.sidebar}>
          <MainSidebar />
        </Grid>
      </Hidden>
    </Grid>
  );
};

// {
//   props.colors.map((color, idx) => (
//     <button
//       key={color}
//       className={styles.button}
//       style={{
//         backgroundColor: props.selColorIdx === idx ? "white" : color,
//         borderColor: color,
//       }}
//       onClick={() => props.handleColorSelection(idx)}
//     />
//   ));
// }

export default HomePage;
