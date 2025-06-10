import { useState } from "react";
import usePostTodos from "./hooks/usePostTodos";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: todos, error, isLoading } = usePostTodos(userId);
  if (isLoading) return <p>adding please wait</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <select
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
