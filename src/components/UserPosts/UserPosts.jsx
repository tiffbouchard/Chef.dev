import React, { useState, useEffect } from "react";
import "./UserPosts.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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
    paddingTop: "theme.spacing(8)",
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

const UserPosts = (props) => {
  const profile = props.profile;
  const classes = useStyles();

  const [userpost, setUserPost] = useState([]);

  useEffect(() => {
    const id = profile._id;
    fetch(`/api/profiles/${id}`)
      .then((res) => res.json())
      .then((userpost) => setUserPost(userpost), console.log(userpost))
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  async function onDeleteClick(index) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await handleDeletePost(userpost[index]._id);
        swal("Poof! Your post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your post has not been deleted!");
      }
    });
  }

  async function handleDeletePost(id) {
    await fetch(`/api/posts/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        let updateUserPosts = userpost.filter((post) => {
          return id !== post._id;
        });
        setUserPost(updateUserPosts);
      });
  }

  console.log(profile);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      {userpost.length > 0 ? (
        <Grid container spacing={4}>
          {userpost.map((post, index) => (
            <Grid item key={post} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={`/post/${post._id}`}>
                  {post.image ? (
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.image}
                      title={post.title}
                    />
                  ) : (
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://miro.medium.com/max/1350/0*Wz93rPzLLTq1VwVW"
                      title={post.title}
                    />
                  )}

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {post.title}
                    </Typography>
                    <Typography variant="h8" component="h8">
                      {new Date(post.createdAt).toDateString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => {
                      onDeleteClick(index);
                    }}
                    size="small"
                    color="primary"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid>
          <h3>You have no recipes submitted, Chef {profile.firstName}</h3>
        </Grid>
      )}
    </Container>
  );
};

export default UserPosts;
