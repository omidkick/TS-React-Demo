import { type ComponentType } from "react";
import { Login } from "./Login";
import type { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Omid" />;
  } else {
    return <Login />;
  }
};
