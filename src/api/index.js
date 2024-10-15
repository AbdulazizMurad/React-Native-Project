import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-native-mini-project-items.eapi.joincoded.com/",
});

export default instance;
