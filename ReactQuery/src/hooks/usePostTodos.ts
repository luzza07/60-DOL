import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const usePostTodos =(userId:number|undefined) => {
  const postTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/posts",{
        params:{
            userId
        }
      })
      .then((res) => res.data);
  return useQuery<Todo[], Error>({
    queryKey: userId? ["users",userId,'posts']:['posts'],
    queryFn: postTodos,
    staleTime: 10 * 1000,
  });
};

export default usePostTodos;
