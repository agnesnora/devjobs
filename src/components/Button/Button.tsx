import { ReactNode, FC } from "react";
import { NavLink } from "react-router-dom";
interface ButtonProps {
  children: ReactNode;
  path: string;
  className: string;
  setMessage?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Button: FC<ButtonProps> = ({
  children,
  path,
  className,
  setMessage,
}) => {
  return (
    <NavLink
      className={className}
      to={path}
      target="_blank"
      onClick={setMessage}
    >
      {children}
    </NavLink>
  );
};
