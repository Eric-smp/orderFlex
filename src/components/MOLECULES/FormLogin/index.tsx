import { InputMaterial, Button, MaterialInputMask } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

import { useForm } from "react-hook-form";
import { TLoginCoung } from "@/types";
import { useEffect, useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export function FormLogin() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [iconInput, setIconInput] = useState(false);
  const { setIsModalOpen, setModalType, loginCount } = useGlobal();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginCoung>();
  const watchCNPJ = watch("cnpj");
  const watchSenha = watch("senha");

  useEffect(() => {
    if (
      watchCNPJ !== "" &&
      watchCNPJ !== undefined &&
      watchSenha !== "" &&
      watchSenha !== undefined &&
      watchSenha.length > 6
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [watchCNPJ, watchSenha]);

  return (
    <Styles.ContentForm>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginCount)}>
        <MaterialInputMask
          register={register("cnpj")}
          placeholder={"Digite o seu CNPJ"}
          type={"text"}
          label={"CNPJ"}
          id={"cnpj"}
          autoComplete="new-password"
          maskPattern="99.999.999/9999-99"
        />
        <InputMaterial
          register={register("senha")}
          placeholder={"Digite a sua senha"}
          type={iconInput ? "text" : "password"}
          label={"Senha"}
          id={"password"}
          autoComplete="new-password"
          prefixIcon={
            iconInput ? (
              <VisibilityOff onClick={() => setIconInput(false)} />
            ) : (
              <Visibility onClick={() => setIconInput(true)} />
            )
          }
        />

        <Button
          text={"Entrar"}
          type="submit"
          backgroundColor={"#f7ad00"}
          color={"#f5f2f2 "}
          disabled={disabledButton}
        />
      </form>
      <div className="footerCarLogin">
        <h3>
          Não possui conta?{" "}
          <p
            onClick={() => {
              setIsModalOpen("visible"),
                setModalType(0),
                console.log("Bateu aqui");
            }}
          >
            Clique aqui.
          </p>
        </h3>
      </div>
    </Styles.ContentForm>
  );
}
