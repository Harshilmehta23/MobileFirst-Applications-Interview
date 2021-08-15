import axios from 'axios';

import {getToken} from './index';
import {showNotification} from './notifications';

const createHeaders = () => {
  let headerObj = {};
  const accessToken = getToken();
  if(accessToken) {
    headerObj = {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return headerObj;
}

const axiosApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/`,
})

axiosApi.interceptors.request.use((request)=>{
  if(!request.ignoreAuth) {
    request.headers = createHeaders();
  }
  return request;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (err) => {
    if(err.response && err.response.status === 500) {
      showNotification('Unknown server error', 'error', 5000);
    }
    return Promise.reject(err);
  }
)

export default axiosApi;