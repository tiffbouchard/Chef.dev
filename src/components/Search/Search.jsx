// import React, { Component } from 'react'
// import searchService from "../../utils/searchService";

// class Search extends Component {
//   state = {
//     query: '',
//   }

//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     })
//   }


//   getSearch = async (e) => {
//     e.preventDefault();
//     try {
//       await searchService.search(this.state);
//       this.props.handleCreatePost();
//       this.props.history.push("/");
//     } catch (err) {
//       this.props.updateMessage(err.message);
//     }
//   };
//   async function getUserAsync(name) {
//   let response = await fetch(`https://api.github.com/users/${name}`);
//   let data = await response.json()
//   return data;
// }

// getUserAsync('yourUsernameHere')
//   .then(data => console.log(data));

// render() {
//   return (
//     <form>
//       <input
//         placeholder="Search for..."
//         ref={input => this.search = input}
//         onChange={this.handleInputChange}
//       />
//       <p>{this.state.query}</p>
//     </form>
//   )
// }
// }

// export default Search