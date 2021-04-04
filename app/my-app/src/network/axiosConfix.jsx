import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
});