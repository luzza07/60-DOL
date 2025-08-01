import { useQuery } from "@tanstack/react-query";

import { CACHE_KEY_TODOS } from "../constants";
import type { Todo } from "../services/todoService";
import todoService from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};
export default useTodos;
