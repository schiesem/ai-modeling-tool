import { BaseEdge, EdgeLabelRenderer, getStraightPath } from "reactflow";

export default function FlowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}) {
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{stroke: "#808080", strokeWidth: 4, strokeDasharray: 8}}/>
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
          }}
          className="text-center text-xs px-4 py-4 shadow-md rounded-md bg-white border-3 border-stone-400"
        >
          <p className="text-base">Flow Edge</p>
          <p className="text-xs italic">{id}</p>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
