const Post = require("../models/post");
const Profile = require("../models/profile");

module.exports = {
    create,
    getPosts,
    getPost
};

// when create post query the Profile
async function create(req, res) {
    const post = new Post(req.body);
    console.log(req.body);
    try {
        await post.markModified("ingredients");
        await post.save();
        res.json({ post });
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getPosts(req, res) {
    const allPosts = await Post.find().populate("profile");
    res.json(allPosts);
    // add cursore() here later when lots of posts so not everything is loaded at once
    // console.log(allPosts);
}

async function getPost(req, res) {

    const id = req.params.id
    console.log(id)
    const Post = await Post.findById(id, function(err, docs) {
        res.json(Post)
    })
};


// add cursore() here later when lots of posts so not everything is loaded at once
// console.log(allPosts);


// async function highScores(req, res) {
//   const scores = await Score.find({})
//     .sort({ numGuesses: 1, seconds: 1 })
//     // Default to a limit of 20 high scores
//     // if not specified in a query string
//     .limit(req.query.limit || 20);
//   res.json(scores);
// }

// Sort by currentDate