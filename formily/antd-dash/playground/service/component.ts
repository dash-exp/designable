import axios from 'axios';


export function loadCompList() {
  return axios.get(`/api/component/list`)
}

export function loadCompSchema (type:string) {
    const url = `/api/component/schema?path=${type}`
    return axios.get(url)
}



