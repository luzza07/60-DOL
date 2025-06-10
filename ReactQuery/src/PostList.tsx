import usePostTodos from "./hooks/usePostTodos";

const PostList = () => {
  const { data: todos, error, isLoading } = usePostTodos();
  if (isLoading) return <p>adding please wait</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
