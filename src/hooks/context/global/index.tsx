/* eslint-disable no-console */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { ChildrenType, TCreateOders, TGlobalProps } from "@/types";

export const initialState: TGlobalProps = {
  isModalOpen: "hidden",
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
  testeFomr: () => {},
};

const GlobalContext = createContext<TGlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const [isModalOpen, setIsModalOpen] = useState<string>("hidden");
  const [modalType, setModalType] = useState<number>(0);

  const testeFomr = useCallback(({ nome, pedido }: TCreateOders) => {
    const params = {
      nome,
      pedido,
    };

    try {
      console.log("Aqui está o nome salvo", nome);
      setIsModalOpen("hidden");

      console.log("aqui está o name", name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {}, [isModalOpen, modalType]);
  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalType,
      setModalType,
      testeFomr,
    }),

    [isModalOpen, modalType, testeFomr]
  );

  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
