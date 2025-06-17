import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Luzza" },
    { id: 2, name: "Nicky" },
    { id: 3, name: "Sheru" },
  ];
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
