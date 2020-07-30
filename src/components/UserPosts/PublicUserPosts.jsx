import React, { useState, useEffect } from "react";
import "./UserPosts.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const PublicUserPosts = (props) => {
  const classes = useStyles();
  if (props.userpost) {
    console.log(props.userpost);
  }
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.userpost &&
          props.userpost.map((post) => (
            <Grid item key={post} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.title}
              />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {post.title}
                  </Typography>
                  <Typography gutterBottom variant="h8" component="h8">
                  {new Date(post.createdAt).toDateString()}
                  </Typography>
                  <span>&nbsp;</span>
                  <Typography>
                    {post.content.split(" ").slice(0, 40).join(" ")}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button
                  component={Link}
                  to={`/post/${post._id}`}
                  size="small"
                  color="primary"
                >
                  View
                </Button></CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PublicUserPosts;
