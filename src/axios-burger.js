import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-db271-default-rtdb.firebaseio.com/",
});

export default instance;
