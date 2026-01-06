import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AuthLayout = ({
  title,
  children,
  onClick,
}: {
  title: string;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <>
      <div className="bg-white z-[100] p-[30px] flex flex-col gap-[30px] fixed left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 w-[90%] sm:w-[450px] rounded-[10px]">
        <XMarkIcon
          onClick={onClick}
          className="h-6 w-6 text-black cursor-pointer absolute top-[30px] right-[30px]"
        />
        <h1 className="text-center font-semibold text-[35px]">{title}</h1>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
