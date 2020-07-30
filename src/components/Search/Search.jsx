import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fade, makeStyles } from "@material-ui/core/styles";


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
  inputRef = React.createRef()

  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  handleMatch = () => {
    console.log('stuff')
    this.props.allPosts.map(input => {
      const search = input.title;
      return search
    })
  }



  findPost = ((input) => {
    const post = this.props.search
    const allPosts = this.props.allpost
    if (allPosts.filter(post) == true) {
      console.log('good')
    }
  })

  handleInput = (input) => {
    const posts = this.props.allpost
    const title = this.state.search
    this.setState({ search: input.target.value })
    console.log(this.props.allPosts)
    console.log(title)
    console.log(this.handleMatch())
    // if (this.state.search == posts.find(title)) {
    //   console.log('working')
    // }
  }


  // this.state.search = search





  render() {
    const { search } = this.state

    return (
      // <div className={classes.search}>
      <div style={{ width: 300 }} >
        <Autocomplete
          classes={{
            // root: classes.inputRoot,
            // input: classes.inputInput,
          }}
          // id="free-solo-demo"
          // freeSolo
          options={this.props.allPosts.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              value={this.state.search}
              onChange={this.handleInput}
              onChange={(event, value) => console.log(value)}
              // onKeyPress
              label="Search"
              margin="normal"
              variant="outlined"
            />
          )}
        />
      </div >
      // </div >
    );
  }
}


export default Search