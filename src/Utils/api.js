//Render async request using Axios

import axios from "axios";
const URL = "https://randomuser.me/api?results=30";

export default {
  search: function () {
    return axios.get(URL);
  },
};
