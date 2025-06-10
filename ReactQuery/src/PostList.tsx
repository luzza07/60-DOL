import { useState } from "react";
import usePostTodos from "./hooks/usePostTodos";

const PostList = () => {
  //   const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: todos, error, isLoading } = usePostTodos({ page, pageSize });
  if (isLoading) return <p>adding please wait</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      {/* <select
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default PostList;
