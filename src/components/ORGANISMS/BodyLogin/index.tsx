import { FormLogin, CardNotification } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function BodyLogin() {
  const { setIsModalOpen, setModalType } = useGlobal();
  return (
    <Styles.ContentBodyLogin>
      <div className="ContentIntroductionProduct">
        <div className="contentCard">
          <h1>
            Com o OrderFlex, uma ferramenta para controle de vendas, fica muito
            mais fácil de organizar os pedidos dos seus clientes
          </h1>
          <h2>
            Entre com sua conta. Caso não tenha{" "}
            <p
              onClick={() => {
                setIsModalOpen("visible"), setModalType(0);
              }}
            >
              Clique aqui!
            </p>
          </h2>
        </div>
      </div>
      <FormLogin />
    </Styles.ContentBodyLogin>
  );
}
