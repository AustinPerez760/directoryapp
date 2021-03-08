//Render async request using Axios

import axios from "./node_modules/axios";
const URL = "https://randomuser.me/api?results=30";

export default {
  search: function () {
    return axios.get(URL);
  },
};
