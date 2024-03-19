import { ReactNode, FC } from "react";
import { NavLink } from "react-router-dom";
interface ButtonProps {
  children: ReactNode;
  path: string;
  className: string;
}
export const Button: FC<ButtonProps> = ({ children, path, className }) => {
  return (
    <NavLink className={className} to={path}>
      {children}
    </NavLink>
  );
};
