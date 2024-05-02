import { Button } from "@/components";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function NavegationHeader() {
  const router = useRouter();
  return (
    <Styles.NavHeader>
      <h3></h3>
      <Button
        backgroundColor="#fff"
        text={"sair"}
        color="#f7ad00"
        width="8rem"
        onClick={() => router.push("/")}
      />
    </Styles.NavHeader>
  );
}
