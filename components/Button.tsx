import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, className, onClick}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex px-3 py-2 rounded-md hover:bg-[#3e84ed] hover:text-white transition-all duration-200 w-50 text-left`}
    >
      {children}
    </button>
  );
}
