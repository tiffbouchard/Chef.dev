import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { title } from "process";


const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },

}));



class Search extends Component {

  constructor() {
    super();
    this.state = {
      search: "",
      current: ""
    }
  }

  handleMatch = () => {
    if (this.state.search > 0)
      return true
  }

  redirect = () => {
    const title = this.state.search
    if (this.state.search !== "") {
      window.location = `http://localhost:3000/post/${title}`
      return console.log('working', window)
    }
  }



  render() {
    const search = this.setState.search
    const searched = this.state.search

    const posts = this.props.allPosts.map((post, idx) => {
      const obj = {
        title: post.title,
        id: post._id,
        idx: idx,
      }
      return obj
    })

    const redirect = () => {
      const title = this.state.search
      console.log(title)
      if (title !== "") {
        window.location = `http://localhost:3000/post/${title}`
      }
    }


    const handleInput = (input) => {
      const posts = this.props.allpost
      const title = this.state.search
      const value = input.target.value
      this.setState({ search: input.target.value })
      if (this.state.search !== "") {
        window.location = `http://localhost:3000/post/${title}`
      }
    }



    const array = posts


    return (
      <div style={{ width: 300 }} >
        <Autocomplete
          options={posts}
          getOptionLabel={(option) => option.id}
          get
          renderOption={option =>
            <span>
              {option.title}
            </span>
          }
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
      </div >
    );
  }
}


export default Search