import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6c717b43498449e88f99d482144b6ffe",
  },
});
