import { NavegationHeader } from "@/components";
import * as Styles from "./styles";
type TNavegation = {
  isNavegation?: boolean;
};
export function Header({ isNavegation }: TNavegation) {
  if (isNavegation) {
    return (
      <Styles.HeaderContentNav>
        <h1>OrderFlex </h1>
        <div>
          <NavegationHeader />
        </div>
      </Styles.HeaderContentNav>
    );
  } else {
    return (
      <Styles.HeaderContent>
        <h1>OrderFlex </h1>
      </Styles.HeaderContent>
    );
  }
}
