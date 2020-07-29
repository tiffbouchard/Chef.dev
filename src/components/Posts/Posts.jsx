import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100vw",
    margin: "0px 0 30px 0",
  },
  media: {
    height: 100,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}));

const Posts = (props) => {
  const classes = useStyles();
  return (
    <Container>
      {props.allPosts.map((post) => (
        <Card className={classes.card}>
          <CardActionArea component={Link} to={"/post/" + post._id}>
            <CardMedia
              className={classes.media}
              image={post.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.content}
                {/* get a snippet of the whole content and display here */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" />
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  {post.profile.username}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  {new Date(post.createdAt).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Posts;
