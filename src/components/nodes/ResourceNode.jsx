import { Handle, useUpdateNodeInternals } from "reactflow";
import { useEffect } from "react";
import { useStore } from "../../store";

const selector = (store) => ({
  getElementDataById: store.getElementDataById,
  handles: store.handles,
});

export default function ResourceNode({ id, type, data }) {
  const store = useStore(selector);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    //console.log("handles has changed - run useUpdateNodeInternals");
    updateNodeInternals(id);
  }, [store.handles]);

  return (
    <div className="w-44 h-28 shrink-0 grow-0 rounded-full text-center px-4 py-4 shadow-lg bg-sky-200 border border-stone-400">
      <h1 className="text-lg">{data.name === undefined || data.name === "undefined" || data.name.length === 0 ? "Resource": data.name}</h1>
      <div className="text-xs italic">
        <p>{data.resourceType === "undefined" ? "no class selected":data.resourceType}</p>
        <p>{id}</p>
        <p>{type}</p>
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
