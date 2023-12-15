import { useStore } from "../../store";
import { FUNCTIONTYPS } from "../../defaultElementsConfig.js";

import DropDown from "./panelElements/DropDown";
import AddHandleField from "./panelElements/AddHandleField";
import ElementDataInput from "./panelElements/ElementDataInput.jsx"

const selector = (store) => ({
  getActiveElementId: store.getActiveElementId,
});

export default function FunctionNodePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();

  return (
    <>
      <p>I am a Function Node Panel</p>
      <p>Active Element: {activeElementId}</p>
      <DropDown typeElements={FUNCTIONTYPS} typeKey="functionType" />
      <AddHandleField
        activeElementId={activeElementId}
        type="source"
      />
      <ElementDataInput activeElementId={activeElementId}/>
    </>
  );
}
