import axios from 'axios';
import * as authManager from '../localStorageUtils/authManager.js';

export const WAGTAIL_API_VERSION = 'v2';

const Axios = axios.create({
  baseURL: `/api/`,
  timeout: 5000,
  headers: { 'X-Version-Requested': WAGTAIL_API_VERSION }
});

/**
 * A Request interceptor.
 * first callback intercepts successfully formed requests
 * second callback handles errors, so pass through
 */
Axios.interceptors.request.use(
  request => {
    // If request is formed successfully, get token from local storage, if it's there.
    const token = authManager.getTokenFromLocalStorage();
    // Add token to Authorization header of all outgoing requests.
    if (token) request.headers['Authorization'] = 'Bearer ' + token;
    // Either way, pass request through.
    return request;
  },
  error => Promise.reject(error)
);


export default Axios;
