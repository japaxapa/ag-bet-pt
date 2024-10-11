import { SelectionType } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface InfoContextType {
  selectedList: SelectionFullType[];
  addToList: (selection: SelectionFullType) => void;
  removeFromList: (selection: SelectionFullType) => void;
  checkIsSelected: (selection: SelectionFullType) => boolean;
  toggleSelected: (selection: SelectionFullType) => void;
}

export interface SelectionFullType extends SelectionType {
  type: string;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export const useInfo = () => {
  const context = useContext(InfoContext);

  if (!context) {
    throw new Error("useInfo must be used within a InfoProvider");
  }
  return context;
};

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [selectedList, setSelectedList] = useState<SelectionFullType[]>([]);

  const addToList = (selection: SelectionFullType) => {
    const newSelected = [...selectedList];
    newSelected.push(selection);
    setSelectedList(newSelected);
  };

  const removeFromList = (selection: SelectionFullType) => {
    const newSelected = [...selectedList].filter(
      (select) => select.id !== selection.id
    );
    setSelectedList(newSelected);
  };

  const toggleSelected = (selection: SelectionFullType) => {
    const isSelected = checkIsSelected(selection);

    if (isSelected) {
      removeFromList(selection);
    } else {
      addToList(selection);
    }
  };

  const checkIsSelected = (selection: SelectionFullType) => {
    return Boolean(
      selectedList.filter((select) => select.id === selection.id).length
    );
  };

  return (
    <InfoContext.Provider
      value={{
        selectedList,
        addToList,
        removeFromList,
        checkIsSelected,
        toggleSelected,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
