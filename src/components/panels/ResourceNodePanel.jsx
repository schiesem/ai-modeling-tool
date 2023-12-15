import { useStore } from "../../store";
import { TECHNICALRESOURCESTYPS } from "../../defaultElementsConfig";

import DropDown from "./panelElements/DropDown";
import AddHandleField from "./panelElements/AddHandleField";

const selector = (store) => ({ getActiveElementId: store.getActiveElementId });

export default function ResourceNodePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();

  return (
    <>
      <p>I am a ResourceNodePanel Panel</p>
      <p>Active Element: {activeElementId}</p>
      <DropDown typeElements={TECHNICALRESOURCESTYPS} typeKey="resourceType" />
      <AddHandleField activeElementId={activeElementId} type="source" />
    </>
  );
}
