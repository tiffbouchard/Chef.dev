const BASE_URL = "/api/posts/";

export default {
  create,
  // getPosts,
};

function create(post) {
  return fetch(BASE_URL + "new", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(post),
  }).then((res) => {
    if (res.ok) return res.json();
  });
}

// function getPosts() {
//   const response = fetch(BASE_URL + "all")
//   const data = await response.json();
//   //     .then(async (response) => {
//   //       const data = await response.json();
//   if (!response.ok) {
//     const error = (data && data.message) || response.statusText;
//     return Promise.reject(error);
//   }
// })
//     .catch ((error) => {
//   console.error("There was an error!", error);
// });
// }
