import { ReactNode } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`px-3 py-2 rounded-md hover:bg-[#3e84ed] hover:text-white transition-all duration-200 w-40 text-left ${className}`}
    >
      {children}
    </button>
  );
}
