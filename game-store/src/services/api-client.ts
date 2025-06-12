import axios, { type AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6c717b43498449e88f99d482144b6ffe",
  },
});

class APICLIENT<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll=(config:AxiosRequestConfig)=>{
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint,config)
    .then(res=>res.data)
  }
}


export default APICLIENT;