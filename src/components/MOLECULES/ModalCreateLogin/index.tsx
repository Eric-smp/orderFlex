import {
  InputMaterial,
  Button,
  MaterialInputMask,
  CardPasswordError,
} from "@/components";
import { X } from "lucide-react";
import { TCreateLogin } from "@/types";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export function ModalCreateLogin() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [messageError, setMessageError] = useState(false);
  const [stateIcon, setStateIcon] = useState(false);

  const [caracter, setCaracter] = useState(false);
  const [maiuscula, setMaiuscula] = useState(false);
  const [numero, setNumero] = useState(false);
  const [quantidade, setQuantidade] = useState(false);

  const { setIsModalOpen, handlePostUser } = useGlobal();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TCreateLogin>();

  const watchName = watch("name");
  const watchPassword = watch("password");
  const watchCNPJ = watch("cnpj");
  const watchUsername = watch("username");

  useEffect(() => {
    if (
      watchName !== "" &&
      watchName !== undefined &&
      watchUsername !== "" &&
      watchUsername !== undefined &&
      watchCNPJ !== "" &&
      watchCNPJ !== undefined &&
      watchPassword !== "" &&
      watchPassword !== undefined
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [watchCNPJ, watchName, watchPassword, watchUsername]);

  useEffect(() => {
    if (watchPassword !== "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  }, [watchPassword]);

  useEffect(() => {
    const maiuscula = /[A-Z]/.test(watchPassword);
    const caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(watchPassword);
    const contemNumero = /\d/.test(watchPassword);

    if (maiuscula) {
      setMaiuscula(true);
    } else {
      setMaiuscula(false);
    }

    if (caracterEspecial) {
      setCaracter(true);
    } else {
      setCaracter(false);
    }

    if (contemNumero) {
      setNumero(true);
    } else {
      setNumero(false);
    }

    if (watchPassword && watchPassword.length > 6) {
      setQuantidade(true);
    } else {
      setQuantidade(false);
    }

    if (maiuscula && caracterEspecial && contemNumero && quantidade) {
      setMessageError(false);
    }
  }, [quantidade, watchPassword]);
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
      <form onSubmit={handleSubmit(handlePostUser)}>
        <InputMaterial
          register={register("name")}
          autoComplete="new-password"
          placeholder={"Digite o seu nome"}
          type={"text"}
          label={"Nome"}
          id={"nome_create"}
        />
        <InputMaterial
          register={register("username")}
          autoComplete="new-password"
          placeholder={"Digite o seu sobrenome"}
          type={"text"}
          label={"Sobrenome"}
          id={"sobrenome_create"}
        />
        <MaterialInputMask
          register={register("cnpj")}
          maskPattern="99.999.999/9999-99"
          autoComplete="new-password"
          placeholder={"Digite seu CNPJ"}
          type={"string"}
          label={"CNPJ"}
          id={"cnpj_create"}
        />
        <InputMaterial
          register={register("password")}
          autoComplete="new-password"
          placeholder={"Digite uma senha"}
          type={stateIcon ? "text" : "password"}
          label={"Senha"}
          id={"password_create"}
          error={messageError}
          prefixIcon={
            stateIcon ? (
              <VisibilityOff onClick={() => setStateIcon(false)} />
            ) : (
              <Visibility onClick={() => setStateIcon(true)} />
            )
          }
        />
        {messageError ? (
          <CardPasswordError
            maiuscula={maiuscula}
            especial={caracter}
            numero={numero}
            minimo={quantidade}
          />
        ) : null}

        <Button
          text={"Criar Conta"}
          backgroundColor={"#f7ad00"}
          color={"#f5f2f2"}
          type="submit"
          disabled={disabledButton}
        />
      </form>
    </Styles.WrapperModal>
  );
}
