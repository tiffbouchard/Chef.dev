import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "./Search.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { title } from "process";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      current: "",
    };
  }

  handleMatch = () => {
    if (this.state.search > 0) return true;
  };

  redirect = () => {
    const title = this.state.search;
    if (this.state.search !== "") {
      window.location = `http://localhost:3000/post/${title}`;
      return console.log("working", window);
    }
  };

  render() {
    const search = this.setState.search;
    const searched = this.state.search;

    const posts = this.props.allPosts.map((post, idx) => {
      const obj = {
        title: post.title,
        id: post._id,
        idx: idx,
      };
      return obj;
    });

    const redirect = () => {
      const title = this.state.search;
      console.log(title);
      if (title !== "") {
        window.location = `http://localhost:3000/post/${title}`;
      }
    };

    const handleInput = (input) => {
      const posts = this.props.allpost;
      const title = this.state.search;
      const value = input.target.value;
      this.setState({ search: input.target.value });
      if (this.state.search !== "") {
        window.location = `http://localhost:3000/post/${title}`;
      }
    };

    const array = posts;

    return (
      <Paper style={{ maxWidth: "100%" }}>
        <div className="search">
          <Autocomplete
            options={posts}
            getOptionLabel={(option) => option.id}
            get
            renderOption={(option) => <span>{option.title}</span>}
            renderInput={(params) => (
              <div>
                <TextField
                  {...params}
                  value={search}
                  onKeyDown={handleInput}
                  // onkeyPress={redirect}
                  // onChange={redirect}
                  onPointerEnter={redirect}
                  // onSelect
                  // onKeyDown={this.redirect}
                  label="Search"
                  margin="normal"
                  variant="outlined"
                />
              </div>
            )}
          />
        </div>
      </Paper>
    );
  }
}

export default Search;
