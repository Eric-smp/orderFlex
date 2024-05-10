import { X } from "lucide-react";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";
import { Button, InputMaterial } from "@/components";
import { useEffect, useState } from "react";
import { TCreateOders } from "@/types";
import { useForm } from "react-hook-form";
export function ModalCreateOrders() {
  const { setIsModalOpen, handleOrder } = useGlobal();
  const [divCount, setDivCount] = useState(1);
  const [inputValues, setInputValues] = useState([""]);
  const [clientName, setClientName] = useState("");
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateOders>();

  const watchNome = watch("nome");
  const watchProduto = watch("nomeProduto");
  const watchPreco = watch("preco");

  useEffect(() => {
    if (
      watchNome !== "" &&
      watchNome !== undefined &&
      watchProduto !== "" &&
      watchProduto !== undefined &&
      watchPreco > 0 &&
      watchPreco !== undefined
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [watchNome, watchPreco, watchProduto]);
  return (
    <Styles.ContentModal>
      <header>
        <span>
          <X
            color="#f7ad00"
            size={"1.7rem"}
            onClick={() => setIsModalOpen("hidden")}
          />
        </span>
        <h1>Criando pedido</h1>
      </header>
      <form onSubmit={handleSubmit(handleOrder)}>
        <InputMaterial
          register={register("nome")}
          placeholder={"Digite o nome do cliente"}
          type={"text"}
          label={"Cliente"}
          id={""}
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setClientName(event.target.value)
          }
        />

        <InputMaterial
          register={register("nomeProduto")}
          placeholder={"Digite o pedido"}
          type={"text"}
          label={"Pedido"}
          id={""}
          autoComplete={"off"}
        />
        <InputMaterial
          placeholder={"Digite o preço"}
          type={"text"}
          label={"Preço"}
          id={""}
          autoComplete={"off"}
          register={register("preco")}
        />
        <footer>
          <Button
            text={"Finalizar pedido"}
            backgroundColor={"blue"}
            color={"#fff"}
            width="8rem"
            type="submit"
            disabled={disabled}
          />
          <Button
            text={"Cancelar Pedido"}
            backgroundColor={"red"}
            color={"#fff"}
            width="8rem"
            onClick={() => setIsModalOpen("hidden")}
          />
        </footer>
      </form>
    </Styles.ContentModal>
  );
}
