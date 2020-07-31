import React, { useEffect, useState } from "react";
import "./Content.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReactPlayer from "react-player";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Parser from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "60vw",
    maxWidth: "60vw",
    margin: "5px 0 0 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  player: {
    // height: '100%',
    // width: '100%',
    // minHeight: '225px'
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "15px",
    margin: "10px",
  },
  chip: {
    padding: "5px",
  },
  title: {
    margin: "10px 0 0 0",
  },
  date: {
    fontSize: "15px",
    color: "grey",
  },
}));

function Content(props) {
  const classes = useStyles();

  const classes2 = useStyles2();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes2.title} variant="h4" component="h2">
          {props.post && props.post.title}
        </Typography>
        <CardHeader
          avatar={
            <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" />
          }
          title={props.post && props.post.profile.username}
          subheader={
            props.post && new Date(props.post.profile.createdAt).toDateString()
          }
        />
      </CardContent>
      {/* <CardHeader
        avatar={
          <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" />
        }
        title={props.post && props.post.profile.username}
        subheader={
          props.post && new Date(props.post.profile.createdAt).toDateString()
        }
      /> */}
      {props.post && props.post.image ? (
        <CardMedia className={classes.media} image={props.post.image} />
      ) : null}
      {props.post && props.post.video ? (
        <ReactPlayer
          className={classes.player}
          width="900px"
          height="500px"
          url={props.post.video}
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      ) : null}
      <Paper elevate={3} component="ul" className={classes2.root}>
        {props.post &&
          props.post.ingredients.map((ingredient) => {
            return (
              <li>
                <Chip label={ingredient} className={classes.chip} />
              </li>
            );
          })}
      </Paper>
      <CardContent>
        <Typography variant="body2" component="p">
          {props.post ? (
            <Typography paragraph>
              {Parser(props.post && props.post.content)}
            </Typography>
          ) : null}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.post ? (
            <Typography paragraph>{Parser(props.post.content)}</Typography>
          ) : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Content;
