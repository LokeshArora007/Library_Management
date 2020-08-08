import axios from 'axios';
import LocalStorageService from '../services/localStorage';
const localStorageService = LocalStorageService.getService();
const token = localStorageService.getAccessToken();

// TODO temporary changes, unless login api is done
const headers = {
  'api-key': process.env.REACT_APP_API_KEY,
  'Content-type': 'application/json',
  'Cache-Control': `no-cache`
};
const baseUrl = process.env.REACT_APP_API_URL;
const API = axios.create({
  baseURL: baseUrl,
  headers,
});

const callList = [];

const toggleIndicator = (url, type) => {
  if (type) {
    callList.push(`${baseUrl}/${url}`);
    document.querySelector('.showLoader').style.display = 'flex';
  }

  if (!type) {
    const index = callList.indexOf(`${baseUrl}/${url}`);
    if (index !== -1) {
      callList.splice(index, 1);
    }
    if (callList.length === 0) {
      document.querySelector('.showLoader').style.display = 'none';
    }
  }
};

API.interceptors.request.use(
  (config) => {
    toggleIndicator(config.url, true);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    toggleIndicator(response.config.url, false);
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    toggleIndicator(arguments[0].config.url, false);
    if (error.response.status === 403) {
      if (error.response.data.error_type !== 'login_failed') {
        await axios
          .post(`${baseUrl}/users/generate-token`, {
            refreshToken: localStorage.getItem('refreshToken'),
          })
          .then((res) => {
            localStorage.setItem(
              'accessToken',
              res.data.data.AuthenticationResult.AccessToken,
            );
            if (error.response.config.url === 'users/me') {
              window.location = '/';
            }
          });
        originalRequest._retry = true;
        originalRequest.headers.authorization = `${localStorage.getItem(
          'accessToken',
        )}`;

        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
    // const originalRequest = error.config;
    /* if (error.response.status === 401) {
      LocalStorageService.clearToken();
      return Promise.reject('Error Page Expired');
    } */
  },
);

export default API;
