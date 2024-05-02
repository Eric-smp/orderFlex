import { useGlobal } from "@/hooks/context/global";
import * as Styles from "./styles";

export function CardOrders() {
  const { testeFomr } = useGlobal();

  const teste = testeFomr;
  return (
    <Styles.ContentOrder>
      <h2>Nome do cliente</h2>
      <div>
        <h3>
          pedido
          {/* Pedido anotados no input */}
        </h3>
      </div>
    </Styles.ContentOrder>
  );
}
