import { NoteCard, Modal, CardOrders } from "@/components";
import * as Styles from "./styles";

export function BodyHome() {
  return (
    <Styles.ContentBody>
      <NoteCard />
      <div className="saveOrders">
        <CardOrders />
      </div>
    </Styles.ContentBody>
  );
}
