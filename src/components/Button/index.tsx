import classNames from "classnames";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  onClick,
  path,
}: {
  children: ReactNode;
  className?: string;
  path: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={classNames(
        "bg-black text-white rounded-[10px] font-semibold text-center text-[18px]",
        className
      )}
    >
      <Link to={path}>{children}</Link>
    </button>
  );
};

export default Button;
