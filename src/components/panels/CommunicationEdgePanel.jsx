import DropDown from "./panelElements/DropDown";
import { COMMUNICATIONTYPS } from "../../defaultElementsConfig";

export default function CommunicationEdgePanel() {
  return (
    <div>
      <p>I am a CommunicationEdgePanel Panel</p>
      <DropDown typeElements={COMMUNICATIONTYPS} typeKey={"communicationType"}/>

    </div>
  );
}
