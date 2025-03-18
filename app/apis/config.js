import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

const API = axios.create({
  baseURL: "https://prismcloudhosting.com/GoRealEstateApis/public/api",
  timeout: 60000,
});
export default API;
