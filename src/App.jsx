import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

import { useStore } from "./store";

import FunctionNode from "./components/nodes/FunctionNode";
import ProductNode from "./components/nodes/ProductNode";
import ResourceNode from "./components/nodes/ResourceNode";

import AssignmentEdge from "./components/edges/AssignmentEdge";
import FlowEdge from "./components/edges/FlowEdge";
import CommunicationEdge from "./components/edges/CommunicationEdge";

import CreatePanel from "./components/panels/CreatePanel";
import ElementPanel from "./components/panels/ElementPanel";

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  createEdge: store.createEdge,
  createNode: store.createNode,
  deleteHandle: store.onDeleteHandle,
  onValidConnection: store.onValidConnection,
});

const nodeTypes = {
  FunctionNode: FunctionNode,
  ProductNode: ProductNode,
  ResourceNode: ResourceNode,
};

const edgeTypes = {
  AssignmentEdge: AssignmentEdge,
  FlowEdge: FlowEdge,
  CommunicationEdge: CommunicationEdge,
};

function App() {
  const store = useStore(selector);
  return (
    <ReactFlow
      nodes={store.nodes}
      edges={store.edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodesChange={store.onNodesChange}
      onEdgesChange={store.onEdgesChange}
      onNodesDelete={store.deleteHandle}
      onConnect={store.createEdge}
      elementsSelectable={true}
      isValidConnection={store.onValidConnection}
      connectionMode={"loose"}
    >
      <Background />
      <CreatePanel />
      <ElementPanel />
    </ReactFlow>
  );
}

export default App;
