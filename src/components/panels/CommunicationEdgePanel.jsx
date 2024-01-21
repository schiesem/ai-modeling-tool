import DropDown from "./panelElements/DropDown";
import InformationPresenter from "./panelElements/InformationPresenter";

import { COMMUNICATIONTYPS } from "../../defaultElementsConfig";

import { useStore } from "../../store";

const selector = (store) => ({ getActiveElementId: store.getActiveElementId });

export default function CommunicationEdgePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();
  return (
    <>
      <p className="text-center">-- Communication Edge selected --</p>
      <div className="flex flex-col space-y-1 text-left pt-2 pb-2">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <p>Class:</p>
          </div>
          <div className="basis-3/4">
            <DropDown typeElements={COMMUNICATIONTYPS} typeKey="communicationType" />
          </div>
        </div>
      </div>

      <InformationPresenter activeElementId={activeElementId} />
    </>
  );
}
