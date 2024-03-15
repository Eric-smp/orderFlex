import { FormLogin } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function BodyLogin() {
  const { setIsModalOpen, setModalType } = useGlobal();
  return (
    <Styles.ContentBodyLogin>
      <div className="ContentIntroductionProduct">
        <div className="contentCard">
          <h1>
            Com o OrderFlex fica mais fácil de organizar seus produtos e anotar
            pedidos dos clientes
          </h1>
          <h2>
            Entre com sua conta. Caso não tenha{" "}
            <a
              onClick={() => {
                setIsModalOpen("visible"), setModalType(0);
              }}
            >
              Clique aqui!
            </a>
          </h2>
        </div>
      </div>
      <FormLogin />
    </Styles.ContentBodyLogin>
  );
}
