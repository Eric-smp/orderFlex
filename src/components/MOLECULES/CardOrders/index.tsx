import { useGlobal } from "@/hooks/context/global";
import * as Styles from "./styles";
import Axios from "axios";
import { TCreateOders } from "@/types";
import { useEffect, useState } from "react";

export function CardOrders() {
  const { consulta, getOrderClient } = useGlobal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [produtos, setProdutos] = useState<TCreateOders[]>([]);

  const fetchProdutos = async () => {
    setLoading(true);
    try {
      const res = await Axios.get("http://localhost:8080/pedidos/get");
      setProdutos(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <Styles.WapperOrder>
      {produtos.map((produto, index) => (
        <Styles.ContentOrder key={index}>
          <h1>Cliente: {produto.nome}</h1>
          <h2>Pedido: {produto.nomeProduto}</h2>
          <span>
            <h3>R$: {produto.preco}</h3>
          </span>
        </Styles.ContentOrder>
      ))}
    </Styles.WapperOrder>
  );
}
