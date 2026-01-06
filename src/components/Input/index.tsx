import React, { forwardRef } from "react";
import classNames from "classnames";
import * as Styles from "./Input.styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <Styles.MainWrapper
        ref={ref}
        className={classNames(
          "outline-none bg-transparent py-3 px-4 text-primary font-primary border border-transparent focus:border-neutral-bi-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
