import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type UserProfileProps = {
  user: User;
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex justify-end items-center p-4">
      <span className="mr-2">{user.name}</span>
      <img
        src={`https://api.dicebear.com/6.x/lorelei/png?seed=${user.name}`}
        alt={user.name}
        className="w-8 h-8 rounded-full"
        loading="lazy"
        onError={(e) =>
          (e.currentTarget.src = "https://via.placeholder.com/32")
        }
      />
    </div>
  );
};

export default UserProfile;
