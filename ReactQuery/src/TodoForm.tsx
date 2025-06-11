import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import type { Todo } from "./hooks/useTodos";
import axios from "axios";


interface  AddTodoContext{
    previousTodos:Todo[]
}
const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo,AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onMutate: (newTodo: Todo) => {
       const previousTodos= queryClient.getQueryData<Todo[]>(['todos'])||[]
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";
      return{previousTodos};
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },onError:(error,newTodo,context)=>{
        if(!context )return;
        queryClient.setQueryData<Todo[]>(['todos'],context.previousTodos)
    }
  });

  //   queryClient.invalidateQueries({
  //     queryKey: ["todos"],
  //   });

  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
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
          <button disabled={addTodo.isPending}>
            {addTodo.isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
