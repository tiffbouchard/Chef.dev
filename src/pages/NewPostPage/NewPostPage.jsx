import React, { Component } from "react";
import postsService from "../../utils/postsService";
import Footer from "../../components/Footer/Footer";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import MUIRichTextEditor from "mui-rte";
import Autocomplete from "@material-ui/lab/Autocomplete";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    video: "",
    profile: this.props.profile._id,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postsService.create(this.state);
      this.props.handleCreatePost();
      this.props.history.push("/");
      // Does REPLACE method refresh teh page so we can see the new blog post?
      //Dont need this after the redirect is to the blogs details page
      //Can just push to the details page (or redirect)
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
              label="Image URL"
              name="image"
              autoComplete="image"
              autoFocus
              type="text"
              placeholder="Image URL"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="header-image"
              label="Youtube Link"
              name="video"
              autoComplete="video"
              autoFocus
              type="text"
              placeholder="Image URL"
              value={this.state.video}
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
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="header-image"
              label="Goal"
              name="goal"
              autoComplete="Goal"
              autoFocus
              type="text"
              placeholder="What is the purpose of this tutorial?"
              value={this.state.goal}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={25}
              rowsMax={500}
              placeholder="Chef up a tutorial..."
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
            {/* <MUIRichTextEditor
              label="Chef up a tutorial..."
              inlineToolbar={true}
              onSave={this.handleChangeContent}
              name="content"
            /> */}
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
        <Footer />
      </Container>
    );
  }
}

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
];

export default withStyles(styles)(NewPostPage);
