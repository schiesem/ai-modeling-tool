import { Panel } from "reactflow";

import CreateButton from "./panelElements/CreateButton";

export default function CreatePanel() {
  return (
    <Panel position="top-left">
      <div className="flex flex-row p-4 space-x-4">
      <CreateButton nodeType="FunctionNode">Create Function</CreateButton>
      <CreateButton nodeType="ProductNode">Create Product</CreateButton>
      <CreateButton nodeType="ResourceNode">Create Resource</CreateButton>
      </div>
    </Panel>
  );
}
