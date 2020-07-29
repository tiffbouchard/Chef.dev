const Post = require("../models/post");

module.exports = {
  search,
};

async function search(req, res) {
  const post = new Post(req.body);
  console.log(req.body);
  try {
    // await search.
    await post.save();
    res.json({ serch });
  } catch (err) {
    res.status(400).json(err);
  }
}


async function getUserAsync(name) {
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}

getUserAsync('yourUsernameHere')
  .then(data => console.log(data)); 