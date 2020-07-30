const Post = require("../models/post");
const Profile = require("../models/profile");

module.exports = {
    create,
    getPosts,
    getPost,
    deletePost
};

// when create post query the Profile
async function create(req, res) {
    const post = new Post(req.body);
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

function getPost(req, res) {
    const id = req.params.id;
    // console.log("User Profile, fetching post from server to display", id);
    return Post.findById(id, function(err, docs) {
        if (err) return err;
        console.log(docs);
        return res.json(docs);
    }).populate("profile");
}


async function deletePost(req, res) {
    const id = req.params.id;
    console.log("User Profile, fetching post id from server to delete", id);
    await Post.findByIdAndDelete(id, function(err) {
        if (err) console.log(err);
        console.log("Successfully Deleted Post")
    })
}

async function deletePost(req, res, next) {
    const id = req.params.id;
    console.log('test')
    try {
        Post.findByIdAndDelete(id, function(err, docs) {
            if (err) console.log(err);
            return res.json(docs);
        });
    } catch (error) {
        console.log(error);
    }

}
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