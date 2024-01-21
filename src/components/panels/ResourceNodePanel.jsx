import { useStore } from "../../store";
import { TECHNICALRESOURCESTYPS } from "../../defaultElementsConfig";

import ElementDataInput from "./panelElements/ElementDataInput";
import InformationPresenter from "./panelElements/InformationPresenter";

import DropDown from "./panelElements/DropDown";
import AddHandleField from "./panelElements/AddHandleField";

const selector = (store) => ({ getActiveElementId: store.getActiveElementId });

export default function ResourceNodePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();

  return (
    <>
      <p className="text-center">-- Resource Node selected-- </p>
      <div className="flex flex-col space-y-1 text-left pt-2 pb-2">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <p>Class:</p>
          </div>
          <div className="basis-3/4">
            <DropDown
              typeElements={TECHNICALRESOURCESTYPS}
              typeKey="resourceType"
            />
          </div>
        </div>
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
