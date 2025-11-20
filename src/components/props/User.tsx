import React from "react";

type UserProps = {
  user: {
    firstName: string;
    lastName: string;
  };
};

// const User = ({ user }: UserProps) => {
//   return (
//     <div>
//       Mr.{user.firstName} {user.lastName}
//     </div>
//   );
// };

// export default User;

const UserAsFC: React.FC<UserProps> = ({ user }) => {
  return (
    <div>
      Mr.{user.firstName} {user.lastName}
    </div>
  );
};

export default UserAsFC;
