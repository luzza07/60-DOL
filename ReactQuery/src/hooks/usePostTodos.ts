import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
interface PostQuery {
  page: number;
  pageSize: number;
}

const usePostTodos = (query: PostQuery) => {
  const postTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start:(query.page-1)* query.pageSize,
          _limit:query.pageSize
        },
      })
      .then((res) => res.data);
      keepPreviousData(true)
  return useQuery<Todo[], Error>({
    queryKey: ["posts", query],
    queryFn: postTodos,
    staleTime: 10 * 1000,
    
  });
};

export default usePostTodos;
