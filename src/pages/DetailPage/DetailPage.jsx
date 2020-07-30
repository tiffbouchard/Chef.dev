import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import Content from "../../components/Content/Content";
import DetailSidebar from "../../components/DetailSidebar/DetailSidebar";
import Tips from "../../components/Tips/Tips";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "vh",
  },
  paper: {
    padding: "10px",
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebar: {
    // backgroundColor: "grey",
  },
}));

//comp did mount mathc.params.....

const DetailPage = (props) => {
  const classes = useStyles();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((post) => setPost(post))
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  // const [profile, setProfile] = useState();

  // let id = null;

  // if (post) {
  //   console.log(post.profile._id);
  //   id = post.profile._id;
  // } else {
  //   console.log("nothign");
  // }

  // useEffect(() => {
  //   fetch(`/api/profile/details/${id}`)
  //     .then((res) => res.json())
  //     .then((profile) => setProfile(profile), console.log(profile))
  //     .catch((error) => {
  //       console.error("error", error);
  //     });
  // }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={8} component={Paper}>
        <div className={classes.paper}>
          <Content {...props} post={post} />
        </div>
      </Grid>
      <Hidden xsDown>
        <Grid item xs={3} sm={4} md={4} className={classes.sidebar}>
          <DetailSidebar post={post} />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={8} md={8} component={Paper}>
        <div className={classes.paper}>
          <Tips {...props} />
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailPage;
