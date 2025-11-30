import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  avatarUrl: string;
};

type UserCardPreview = {
  mode: "preview";
  user: Pick<User, "name" | "avatarUrl">;
};

type UserCardFull = {
  mode: "full";
  user: Omit<User, "id">;
};

type UserCardProps = UserCardPreview | UserCardFull;

const UserCard: React.FC<UserCardProps> = (props) => {
  const commonClasses =
    "card flex flex-col items-center gap-3 p-6 max-w-sm mx-auto rounded-lg shadow-md transition-transform hover:scale-[1.02]";

  if (props.mode === "preview") {
    const { name, avatarUrl } = props.user;
    return (
      <div className={`${commonClasses} bg-surface mt-20`}>
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="user-avatar w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
        />
        <h3 className="text-lg font-semibold text-dark">{name}</h3>
      </div>
    );
  } else {
    const { name, email, role, avatarUrl } = props.user;
    return (
      <div className={`${commonClasses} bg-surface`}>
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="user-avatar w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
        />
        <h3 className="text-xl font-bold text-dark">{name}</h3>
        <p className="text-sm text-light">{email}</p>
        <span
          className={`badge ${
            role === "admin" ? "badge-danger" : "badge-primary"
          }`}
        >
          {role.toUpperCase()}
        </span>
      </div>
    );
  }
};

export default UserCard;
