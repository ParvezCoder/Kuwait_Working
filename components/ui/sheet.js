import * as React from "react";
import { cn } from "../../lib/utils";

export const Sheet = ({ children, isOpen, onClose }) => {
  return (
    <div className={cn("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", isOpen ? "block" : "hidden")}>
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export const SheetTrigger = ({ children, onClick }) => (
  <button onClick={onClick} className="text-blue-500 hover:underline">
    {children}
  </button>
);

export const SheetContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
