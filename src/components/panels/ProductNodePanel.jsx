import { useStore } from "../../store";
import AddHandleField from "./panelElements/AddHandleField";

const selector = (store) => ({ getActiveElementId: store.getActiveElementId });

export default function ProductNodePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();
  return (
    <>
      <p>I am a ProductNodePanel Panel</p>
      <AddHandleField
        activeElementId={activeElementId}
        type="target"
      />
    </>
  );
}
