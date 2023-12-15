import { applyNodeChanges, applyEdgeChanges } from "reactflow";
import { nanoid } from "nanoid";

import { createWithEqualityFn } from "zustand/traditional";
import { persist, createJSONStorage } from "zustand/middleware";
import { shallow } from "zustand/shallow";

import {
  FUNCTION_NODE_ATTR,
  FUNCTION_NODE_DATA,
  RESOURCE_NODE_ATTR,
  RESOURCE_NODE_DATA,
  PRODUCT_NODE_ATTR,
  PRODUCT_NODE_DATA,
  COMMUNICATION_EDGE_ATTR,
  COMMUNICATION_EDGE_DATA,
  ASSIGNMENT_EDGE_ATTR,
  ASSIGNMENT_EDGE_DATA,
  PRODUCTFLOW_EDGE_ATTR,
  PRODUCTFLOW_EDGE_DATA,
} from "./defaultElementsConfig";

import {
  connectionValidator,
  connectionClassifier,
} from "./utils/connectionUtils";

const idLength = 6;

export const useStore = createWithEqualityFn(
  persist(
    (set, get) => ({
      nodes: [],
      edges: [],
      handles: [],

      //node functions
      onNodesChange(changes) {
        set({
          nodes: applyNodeChanges(changes, get().nodes),
        });
      },

      updateNode(id, data) {
        set({
          nodes: get().nodes.map((node) =>
            node.id === id ? { ...node, data: { ...node.data, ...data } } : node
          ),
        });
      },

      createNode(type) {
        const id = nanoid(idLength);

        switch (type) {
          case "FunctionNode": {
            const data = { ...FUNCTION_NODE_DATA };
            const position = { x: 0, y: 0 };
            set({
              nodes: [
                ...get().nodes,
                { id, ...FUNCTION_NODE_ATTR, data, position },
              ],
            });
            break;
          }
          case "ProductNode": {
            const data = { ...PRODUCT_NODE_DATA };
            const position = { x: 0, y: 0 };
            set({
              nodes: [
                ...get().nodes,
                { id, ...PRODUCT_NODE_ATTR, data, position },
              ],
            });
            break;
          }
          case "ResourceNode": {
            const data = { ...RESOURCE_NODE_DATA };
            const position = { x: 0, y: 0 };
            set({
              nodes: [
                ...get().nodes,
                { id, ...RESOURCE_NODE_ATTR, data, position },
              ],
            });
            break;
          }
        }
      },

      updateNode(id, data) {
        set({
          nodes: get().nodes.map((node) =>
            node.id === id ? { ...node, data: { ...node.data, ...data } } : node
          ),
        });
      },

      //handles functions
      createHandle(nodeId, handleSide, type) {
        const handleId = nanoid(idLength);
        const createHandle = {
          nodeId: nodeId,
          id: handleId,
          type: type,
          position: handleSide,
          isConnectable: true,
        };

        set({
          handles: [createHandle, ...get().handles],
        });
      },

      onDeleteHandle(changes) {
        changes.forEach((change) => {
          let filteredHandles = get().handles.filter(
            (handle) => handle.nodeId !== change.id
          );
          set({ handles: [...filteredHandles] });
        });
      },

      updateHandlePos(handleId, pos) {
        set({
          handles: get().handles.map((handle) =>
            handle.id === handleId ? { ...handle, position: pos } : edge
          ),
        });
      },

      //edge functions
      onEdgesChange(changes) {
        set({
          edges: applyEdgeChanges(changes, get().edges),
        });
      },

      updateEdge(id, data) {
        set({
          edges: get().edges.map((edge) =>
            edge.id === id ? { ...edge, data: { ...edge.data, ...data } } : edge
          ),
        });
      },

      createEdge(changes) {
        const id = nanoid(idLength);
        // getting target and source nodeIds and classes
        const targetNodeId = changes.target;
        const sourceNodeId = changes.source;
        const targetNodeType = get().nodes.find(
          (node) => node.id === targetNodeId
        ).type;
        const sourceNodeType = get().nodes.find(
          (node) => node.id === sourceNodeId
        ).type;
        // getting connection type
        const type = connectionClassifier(sourceNodeType, targetNodeType);
        let data = {};
        let attr = {};

        switch (type) {
          case "CommunicationEdge":
            data = { ...COMMUNICATION_EDGE_DATA };
            attr = { ...COMMUNICATION_EDGE_ATTR };
            break;
          case "AssignmentEdge":
            attr = { ...ASSIGNMENT_EDGE_ATTR };
            data = { ...ASSIGNMENT_EDGE_DATA };
            break;
          case "FlowEdge":
            attr = { ...PRODUCTFLOW_EDGE_ATTR };
            data = { ...PRODUCTFLOW_EDGE_DATA };
            break;
          default:
            console.log("No known Type fore Creating an Edge");
        }

        // creating data object
        const createdEdge = {
          id,
          ...attr,
          ...changes,
          data,
        };
        // creating the new edge
        set({
          edges: [createdEdge, ...get().edges],
        });
      },

      onValidConnection(connection) {
        const targetNodeId = connection.target;
        const sourceNodeId = connection.source;
        const targetNodeType = get().nodes.find(
          (node) => node.id === targetNodeId
        ).type;
        const sourceNodeType = get().nodes.find(
          (node) => node.id === sourceNodeId
        ).type;

        return connectionValidator(targetNodeType, sourceNodeType);
      },

      //general element functions
      getActiveElementId() {
        const elements = [...get().edges, ...get().nodes];
        const activeElement = elements.find(
          (element) => element.selected === true
        );
        return activeElement ? activeElement.id : undefined;
      },

      getElementDataById(id) {
        const elements = [...get().edges, ...get().nodes];
        const elementData = elements.find((element) => element.id === id);
        return elementData;
      },
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  ),
  shallow
);
