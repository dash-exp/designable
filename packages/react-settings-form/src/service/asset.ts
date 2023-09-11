import axios from 'axios';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const access_token = localStorage.getItem('access_token')
  const token = `Bearer ${access_token}`;

  config.headers.Authorization =  token;
  return config;
});

const  CONTENT_TYPE_JSON = {
  headers:{
    'Content-Type': 'application/json'
  }
}


export const listAssetChildren = (path:string) => {
 return axios.get(`/api/content/asset/listChildren?itemPath=${path}`)
}


