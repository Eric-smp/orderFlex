import { InputMaterial, Button } from "@/components";
import { X } from "lucide-react";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function ModalCreateLogin() {
  const { setIsModalOpen } = useGlobal();
  return (
    <Styles.WrapperModal>
      <div className="headerModal">
        <span>
          <X
            color="#f7ad00"
            size={"1.7rem"}
            onClick={() => setIsModalOpen("hidden")}
          />
        </span>
        <h1>Crie sua conta</h1>
      </div>
      <form>
        <InputMaterial
          placeholder={"Digite o seu nome"}
          type={"text"}
          label={"Nome"}
          id={"nome_create"}
        />
        <InputMaterial
          placeholder={"Digite o seu sobrenome"}
          type={"text"}
          label={"Sobrenome"}
          id={"sobrenome_create"}
        />
        <InputMaterial
          placeholder={"Digite seu CNPJ"}
          type={"string"}
          label={"CNPJ"}
          id={"cnpj_create"}
        />
        <InputMaterial
          placeholder={"Digite uma senha"}
          type={"password"}
          label={"Senha"}
          id={"password_create"}
        />

        <Button
          text={"Criar Conta"}
          backgroundColor={"#f7ad00"}
          color={"#f5f2f2"}
        />
      </form>
    </Styles.WrapperModal>
  );
}
