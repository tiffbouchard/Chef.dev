const BASE_URL = "/api/search/";

export default {
  search,
};

function search() {
  fetch(BASE_URL + "search")
    .then(async (response) => {
      const search = await response.json();
      if (!response.ok) {
        const error = (search && search.message) || response.statusText;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
}
