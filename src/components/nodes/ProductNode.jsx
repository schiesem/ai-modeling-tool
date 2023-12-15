import { Handle, useUpdateNodeInternals } from "reactflow";
import { useEffect } from "react";
import { useStore } from "../../store";

const selector = (store) => ({
  getElementDataById: store.getElementDataById,
  handles: store.handles,
});

export default function ProductNode({ id, type, data }) {
  const store = useStore(selector);
  const updateNodeInternals = useUpdateNodeInternals();

  // updates node if handles changes
  useEffect(() => {
    //console.log("handles has changed - run useUpdateNodeInternals");
    updateNodeInternals(id);
  }, [store.handles]);

  return (
    <div className="text-center px-4 py-4 shadow-md rounded-lg bg-white border-3 border-stone-400">
      <h1 className="text-lg">Product Node</h1>
      <div className="text-xs italic">
        <p>{id}</p>
        <p>{type}</p>
        <p>{data.content1}</p>
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
