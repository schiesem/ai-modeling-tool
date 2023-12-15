import { Panel } from "reactflow";
import { useStore } from "../../store";

import FunctionNodePanel from "./FunctionNodePanel";
import ProductNodePanel from "./ProductNodePanel";
import ResourceNodePanel from "./ResourceNodePanel";
import AssignmentEdgePanel from "./AssignmentEdgePanel";
import CommunicationEdgePanel from "./CommunicationEdgePanel";
import ProductFlowEdgePanel from "./ProductFlowEdgePanel";
import DefaultPanel from "./DefaultPanel";

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  getActiveElementId: store.getActiveElementId,
  getElementDataById: store.getElementDataById,
});

const elementPanelSelector = (elementTyp) => {
  if (elementTyp != undefined) {
    switch (elementTyp) {
      case "FunctionNode":
        return <FunctionNodePanel />;
      case "ProductNode":
        return <ProductNodePanel />;
      case "ResourceNode":
        return <ResourceNodePanel />;
      case "AssignmentEdge":
        return <AssignmentEdgePanel />;
      case "CommunicationEdge":
        return <CommunicationEdgePanel />;
      case "FlowEdge":
        return <ProductFlowEdgePanel />;
      default:
        <DefaultPanel />;
    }
  } else {
    return <h1>No Element Selected</h1>;
  }
};

//

export default function ElementPanel() {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();
  const activeElementType =
    activeElementId && store.getElementDataById(activeElementId).type;
  return (
    <Panel position="top-right">
      <div className="text-left px-4 py-4 shadow-md rounded-xs bg-white border-3 border-stone-400">
        <h1>Configure selected elements:</h1>
        {elementPanelSelector(activeElementType)}
      </div>
    </Panel>
  );
}
