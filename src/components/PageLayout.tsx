import React from "react";
import UserProfile from "../components/UserProfile";
import { useUser } from "../hooks/useUser";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const user = useUser();

  return (
    <div className="flex-grow flex flex-col">
      <UserProfile user={user} />
      <hr style={{ borderColor: "#F0F2F5" }} />
      {children}
    </div>
  );
};

export default PageLayout;
