import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import type { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo,Error,Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      //   queryClient.invalidateQueries({
      //     queryKey: ["todos"],
      //   });

      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      {addTodo.error && <div className="alert alert-danger">{addTodo.error.message}</div>}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div>
          <input ref={ref} type="text" />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
