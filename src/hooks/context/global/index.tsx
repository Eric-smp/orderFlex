/* eslint-disable no-console */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  ChildrenType,
  TCreateOders,
  TGlobalProps,
  TCreateLogin,
  TLoginCoung,
} from "@/types";
import Axios from "axios";
import { useRouter } from "next/router";

export const initialState: TGlobalProps = {
  isModalOpen: "hidden",
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
  testeFomr: () => {},
  handlePostUser: () => {},
  loginCount: () => {},
  notification: false,
  setNotification: () => {},
};

const GlobalContext = createContext<TGlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const route = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<string>("hidden");
  const [modalType, setModalType] = useState<number>(0);
  const [notification, setNotification] = useState(false);

  console.log("modalType", isModalOpen);

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

  const handlePostUser = useCallback(
    async ({ name, cnpj, username, password }: TCreateLogin) => {
      const url = "./api/CreateUser/loginUser";
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const params = {
        name,
        cnpj,
        password,
        username,
      };

      try {
        await Axios.post(url, params, config);
        setIsModalOpen("hidden");
        setNotification(true);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const loginCount = useCallback(async ({ cnpj, senha }: TLoginCoung) => {
    const url = "./api/CreateUser/verifyLogin";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const params = {
      cnpj,
      senha,
    };

    try {
      await Axios.post(url, params, config);
      route.push("/home");
    } catch (error) {
      console.log("Deu erro");
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
      handlePostUser,
      loginCount,
      notification,
      setNotification,
    }),

    [
      isModalOpen,
      modalType,
      testeFomr,
      handlePostUser,
      loginCount,
      notification,
    ]
  );

  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
