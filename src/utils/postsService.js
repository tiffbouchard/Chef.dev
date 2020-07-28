const BASE_URL = "/api/posts/";

export default {
  create,
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
