import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "ram" },
    { id: 2, name: "shyam" },
    { id: 3, name: "hari" },
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
