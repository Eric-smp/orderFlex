import * as Dialog from "@radix-ui/react-dialog";
import { InputMaterial, Button, MaterialInputMask } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";
import { useRouter } from "next/router";

export function FormLogin() {
  const { setIsModalOpen, setModalType } = useGlobal();
  const route = useRouter();
  return (
    <Styles.ContentForm>
      <h1>Login</h1>
      <form autoComplete="off">
        <InputMaterial
          placeholder={"Digite o seu CNPJ"}
          type={"text"}
          label={"CNPJ"}
          id={"cnpj"}
          autoComplete="off"
        />
        <InputMaterial
          placeholder={"Digite a sua senha"}
          type={"password"}
          label={"Senha"}
          id={"password"}
          autoComplete="off"
        />

        <Button
          text={"Entrar"}
          type="button"
          backgroundColor={"#f7ad00"}
          color={"#f5f2f2 "}
          onClick={() => route.push("/home")}
        />
      </form>
      <div className="footerCarLogin">
        <h3>
          Não possui conta?{" "}
          <a
            onClick={() => {
              setIsModalOpen("visible"), setModalType(0);
            }}
          >
            Clique aqui.
          </a>
        </h3>
      </div>
    </Styles.ContentForm>
  );
}
