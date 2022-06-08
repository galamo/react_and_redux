import axios from "axios";
import { store } from ".";

// import { baseUrl } from "../components/pages/countries";
export const baseUrl = "https://restcountries.com/v3.1";

export const axiosApi = axios.create({
  baseURL: baseUrl,
});
let numbeOfRequests = 0;
axiosApi.interceptors.response.use(
  (response) => {
    numbeOfRequests++;
    if (numbeOfRequests > 3) {
      window.location.href = "https://www.google.com";
    }
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      window.location.href = "https://www.google.com";
    }
    return Promise.reject();
  }
);
