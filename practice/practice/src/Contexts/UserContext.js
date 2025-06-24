import { createContext, useState } from "react";

export const UserContext =
  (createContext < UserContextType) | (undefined > undefined);

export function UserProvider() {
  const [user] = useState < User > { name: "ram", age: 30 };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
