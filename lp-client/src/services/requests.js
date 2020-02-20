import Axios from "./axiosConfig";

// Pages
export const getPage = path => Axios.get(`/page?path=${path}`)