import { useStore } from "../../store";
import AddHandleField from "./panelElements/AddHandleField";
import InformationPresenter from "./panelElements/InformationPresenter";
import ElementDataInput from "./panelElements/ElementDataInput";

const selector = (store) => ({ getActiveElementId: store.getActiveElementId });

export default function ProductNodePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();
  return (
    <>
      <p className="text-center">-- Product Node Selected --</p>
      <div className="flex flex-col space-y-1 text-left pt-2 pb-2">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <p>Name:</p>
          </div>
          <div className="basis-3/4">
            <ElementDataInput activeElementId={activeElementId} />
          </div>
        </div>
        <AddHandleField activeElementId={activeElementId} type="source" />
        <InformationPresenter activeElementId={activeElementId} />
      </div>
    </>
  );
}
