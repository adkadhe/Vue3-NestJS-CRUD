import axios from "axios";
import router from "../router";

let baseURL = "/genius-review/v1";

if (import.meta.env.VITE_API_ENDPOINT) {
  baseURL = import.meta.env.VITE_API_ENDPOINT as string;
}
const $api = axios.create({ baseURL });

export default $api;
