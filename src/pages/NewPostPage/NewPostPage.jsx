import React, { Component } from "react";
import "./NewPostPage.css";
import postsService from "../../utils/postsService";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Autocomplete from "@material-ui/lab/Autocomplete";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 10),
    // change 3 to 50 when figure out RTE
  },
});
class NewPostPage extends Component {
  state = {
    title: "",
    content: "",
    goal: "",
    ingredients: [],
    image: "",
    profile: this.props.profile._id,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postsService.create(this.state);
      this.props.handleCreatePost();
      this.props.history.push("/profile/" + this.state.profile);
    } catch (err) {
      alert("Error");
      //   this.props.updateMessage(err.message);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeTextEditor = (html) => {
    this.setState({ content: html });
  };

  handleMultipleChange = (e, values) => {
    this.setState({
      ingredients: values,
    });
  };

  //   handleChangeContent = (text) => {
  //     console.log(text);
  //     this.setState({
  //       content: text,
  //     });
  //   };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            New Post
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="header-image"
              label="Header Image Link"
              name="image"
              autoComplete="image"
              autoFocus
              type="text"
              placeholder="Header Image Link"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <Autocomplete
              required
              multiple
              rows="2"
              id="tags-outlined"
              options={ingredients}
              defaultValue={[ingredients[1]]}
              filterSelectedOptions
              onChange={this.handleMultipleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  variant="outlined"
                  label="Ingredients"
                  placeholder="Ingredients"
                  name="ingredients"
                />
              )}
            />
            <ReactQuill
              theme="snow"
              placeholder="Chef up a tutorial..."
              value={this.state.content}
              name="content"
              onChange={this.handleChangeTextEditor}
              modules={NewPostPage.modules}
              formats={NewPostPage.formats}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Post
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

NewPostPage.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["code", "code-block", "link", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

NewPostPage.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "code",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
];

const ingredients = [
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

// let users add to the ingredients

export default withStyles(styles)(NewPostPage);
