import userService from "./services/user-service";
import type { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Babatunde" };
    setUsers([...users, newUser]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          User Management
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {isLoading && (
          <div className="text-center text-gray-500 mb-4">
            Loading... Please wait
          </div>
        )}

        <div className="flex justify-end mb-4">
          <button
            onClick={addUser}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          >
            Add User
          </button>
        </div>

        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center"
            >
              <span className="font-medium">{user.name}</span>
              <div className="space-x-2">
                <button
                  onClick={() => updateUser(user)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteUser(user)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
