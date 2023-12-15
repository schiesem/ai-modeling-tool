import { Handle, useUpdateNodeInternals } from "reactflow";
import { useEffect } from "react";
import { useStore } from "../../store";

const selector = (store) => ({
  getElementDataById: store.getElementDataById,
  handles: store.handles,
});

export default function FunctionNode({ id, type, data }) {
  const store = useStore(selector);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    //console.log("handles has changed - run useUpdateNodeInternals");
    updateNodeInternals(id);
  }, [store.handles]);

  return (
    <div className="text-center px-4 py-4 shadow-md rounded-md bg-white border-3 border-stone-400">
      <h1 className="text-lg">Function Node</h1>
      <div className="text-xs italic">
        <p>{data.name}</p>
        <p>{id}</p>
        <p>{type}</p>
        <p>{data.functionType}</p>
      </div>
      {store.handles.map(
        (handle) =>
          handle.nodeId === id && (
            <Handle
              key={handle.id}
              id={handle.id}
              position={handle.position}
              type={handle.type}
              isConnectable={handle.isConnectable}
            />
          )
      )}
    </div>
  );
}
