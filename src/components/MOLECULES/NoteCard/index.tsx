import { useGlobal } from "@/hooks/context/global";
import * as Styles from "./styles";

export function NoteCard() {
  const { setIsModalOpen, setModalType } = useGlobal();
  return (
    <Styles.NoteCard
      onClick={() => {
        setIsModalOpen("visible"), setModalType(1);
      }}
    >
      <h2>+</h2>
    </Styles.NoteCard>
  );
}
