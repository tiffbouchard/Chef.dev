import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./MainSidebar.css";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Search from "../Search/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "31px 0 10px 0",
    width: "95%",
  },
  search: {
    margin: "20px 0 0 0",
  },
  menu: {
    padding: "20px 20px 0 15px",
    fontWeight: "bold",
  },
}));

export default function MainSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Search allPosts={props.allPosts} />
      <Paper className={classes.search}>
        <MenuItem className={classes.menu}>Ingredients</MenuItem>
        <List>
          {ingredients.map((ingredient) => (
            <ListItem>{ingredient}</ListItem>
          ))}
        </List>
        <MenuItem className={classes.menu}>Featured</MenuItem>
        <MenuItem className={classes.menu}>Trending</MenuItem>
      </Paper>
    </div>
  );
}

const ingredients = [
  "Express",
  "Java",
  "Javascript",
  "Python",
  "Node.js",
  "HTML",
  "CSS",
  "Typescript",
  "MongoDB",
  "PostgreSQL",
  "C",
  "C++",
  "C#",
  "jQuery",
  "PHP",
  "Ruby",
  "SQL",
  "Bootstrap",
  "Materialize",
  "React",
  "Swift",
  "Ruby on Rails",
  "Django",
  "Material UI",
  "SASS",
];
