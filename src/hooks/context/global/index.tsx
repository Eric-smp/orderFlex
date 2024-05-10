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
import axios from "axios";

export const initialState: TGlobalProps = {
  isModalOpen: "hidden",
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
  handleOrder: () => {},
  handlePostUser: () => {},
  loginCount: () => {},
  notification: false,
  setNotification: () => {},
  consulta: {} as TCreateOders,
  setConsulta: () => {},
  getOrderClient: () => {},
  produtos: [],
  setProdutos: () => {},
  notificationOrder: false,
  setNotificationOrder: () => {},
};

const GlobalContext = createContext<TGlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const route = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<string>("hidden");
  const [modalType, setModalType] = useState<number>(0);
  const [notification, setNotification] = useState(false);
  const [consulta, setConsulta] = useState<TCreateOders>({} as TCreateOders);
  const [produtos, setProdutos] = useState<TCreateOders[]>([]);
  const [notificationOrder, setNotificationOrder] = useState(false);

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
        setTimeout(function () {
          setNotification(true);
          setTimeout(function () {
            setNotification(false);
          }, 2000);
        }, 500);
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
      setIsModalOpen("visible");
      setModalType(2);

      console.log("Deu erro");
    }
  }, []);

  const handleOrder = useCallback(
    async ({ nome, nomeProduto, preco }: TCreateOders) => {
      const url = "./api/Orders/createOrders";
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const params = {
        nome,
        nomeProduto,
        preco,
      };

      try {
        const result = await Axios.post(url, params, config);
        setIsModalOpen("hidden");

        setTimeout(function () {
          setNotificationOrder(true);
          setTimeout(function () {
            setNotificationOrder(false);
          }, 2000);
          window.location.reload();
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const getOrderClient = useCallback(async () => {
    const url = `${process.env.GET_ORDERS}`;

    try {
      const response = await Axios.get(url);
      setProdutos(response.data);
      console.log("AQUI A CONSULTA", produtos);
    } catch (error) {
      console.log("deu ruim");
    }
  }, []);

  useEffect(() => {
    getOrderClient;
  }, [isModalOpen, modalType, getOrderClient]);
  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalType,
      setModalType,

      handlePostUser,
      loginCount,
      notification,
      setNotification,
      handleOrder,
      consulta,
      setConsulta,
      getOrderClient,
      produtos,
      setProdutos,
      notificationOrder,
      setNotificationOrder,
    }),

    [
      isModalOpen,
      modalType,
      handlePostUser,
      loginCount,
      notification,
      handleOrder,
      consulta,
      setConsulta,
      getOrderClient,
      notificationOrder,
      setNotificationOrder,
    ]
  );

  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
