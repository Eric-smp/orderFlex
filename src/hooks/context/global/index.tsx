/* eslint-disable no-console */
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { ChildrenType, TGlobalProps } from "@/types";

export const initialState: TGlobalProps = {
  isModalOpen: "hidden",
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
};

const GlobalContext = createContext<TGlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const [isModalOpen, setIsModalOpen] = useState<string>("hidden");
  const [modalType, setModalType] = useState<number>(0);

  useEffect(() => {}, [isModalOpen, modalType]);
  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalType,
      setModalType,
    }),

    [isModalOpen, modalType]
  );

  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
