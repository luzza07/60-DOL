import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
 const addTodo =useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });
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
          <button>
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
