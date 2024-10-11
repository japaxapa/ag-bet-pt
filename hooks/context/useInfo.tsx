import React, { createContext, ReactNode, useContext, useState } from "react";

interface InfoContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export const useInfo = () => {
  const context = useContext(InfoContext);

  if (!context) {
    throw new Error("useInfo must be used within a InfoProvider");
  }
};

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <InfoContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </InfoContext.Provider>
  );
};
