import React, { createContext, useContext } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const UserContext = createContext<User | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
