import{ createContext, useState } from "react";

type User = {
  name: string;
  age: number;
};

type UserContextType = User;

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [user] = useState<User>({ name: "ram", age: 30 });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
