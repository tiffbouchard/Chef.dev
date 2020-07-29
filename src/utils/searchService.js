const BASE_URL = "/api/search/";

export default {
  Search,
};

function Search(post) {
  return fetch(BASE_URL + "search", {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(post),
  }).then((res) => {
    if (res.ok) return res.json();
  });
}
