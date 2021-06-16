import axios from "axios";

export default axios.create({
  baseURL: "https://server-files-unac.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});