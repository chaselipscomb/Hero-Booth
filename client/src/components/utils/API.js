import axios from "axios";

const BASEURL = "/api/search/"
// const BASEURL = "https://superheroapi.com/api/search";
// const APIKEY = "2736829286383037";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query).then(({data}) => data);
  }
};