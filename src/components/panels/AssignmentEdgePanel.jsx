import { useStore } from "../../store";
import InformationPresenter from "./panelElements/InformationPresenter";

const selector = (store) => ({ getActiveElementId: store.getActiveElementId });

export default function AssignmentEdgePanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();

  return (
    <>
      <p className="text-center">-- Assignment Edge Selected --</p>
      <div className="flex flex-col space-y-1 text-left pt-2 pb-2">
        <InformationPresenter activeElementId={activeElementId}/>
      </div>
    </>
  );
}
