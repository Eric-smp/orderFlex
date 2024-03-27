import { useGlobal } from "@/hooks/context/global";
import * as Styles from "./styles";

export function CardOrders() {
  const { testeFomr } = useGlobal();

  const teste = testeFomr;
  return (
    <Styles.ContentOrder>
      <h3>Nome do cliente</h3>
      <div>
        <p>
          pedido
          {/* Pedido anotados no input */}
        </p>
      </div>
    </Styles.ContentOrder>
  );
}
