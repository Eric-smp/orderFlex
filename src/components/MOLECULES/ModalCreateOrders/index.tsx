import { X } from "lucide-react";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";
import { Button, InputMaterial } from "@/components";
import { useEffect, useState } from "react";
import { TCreateOders } from "@/types";
import { useForm } from "react-hook-form";
export function ModalCreateOrders() {
  const { setIsModalOpen } = useGlobal();
  const [divCount, setDivCount] = useState(1);
  const [inputValues, setInputValues] = useState([""]);
  const [clientName, setClientName] = useState("");
  const [orders, setOrders] = useState([]);
  const { testeFomr } = useGlobal();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateOders>();

  const watchNome = watch("nome");
  const watchPedido = watch("pedido");

  console.log("AQUI ESTÁ O NOME DO LOCAL", watchNome);
  const handleAddDiv = () => {
    setDivCount(divCount + 1);
    setInputValues([...inputValues, ""]);
  };

  const handleInputChange = (index: any, value: any) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  // const handleFinishOrder = (): void => {
  //   setOrders([...orders, { clientName, items: inputValues }]);
  // };
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
      <form>
        <InputMaterial
          placeholder={"Digite o nome do cliente"}
          type={"text"}
          label={""}
          id={""}
          autoComplete="off"
          onChange={(e) => setClientName(e.target.value)}
        />
        {[...Array(divCount)].map((_, index) => (
          <div key={index} className="inputOrder">
            <InputMaterial
              placeholder={"Digite o pedido"}
              type={"string"}
              label={""}
              id={""}
              // value={inputValues[index]}
              // onChange={(e) => handleInputChange(index, e.target.value)}
              autoComplete="off"
            />
            {index === divCount - 1 && (
              <span className="addOrder" onClick={handleAddDiv}>
                +
              </span>
            )}
          </div>
        ))}
        <footer>
          <Button
            text={"Finalizar pedido"}
            backgroundColor={"blue"}
            color={"#fff"}
            width="8rem"
            // type="submit"
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
