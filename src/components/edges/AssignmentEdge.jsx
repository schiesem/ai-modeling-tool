import { BaseEdge, EdgeLabelRenderer, getStraightPath } from "reactflow";

export default function AssignmentEdge({
  id,
  data,
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
      <BaseEdge id={id} path={edgePath} style={{stroke: "#808080", strokeWidth: 4, strokeDasharray: 3}}/>
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
          }}
          className="text-center text-xs px-4 py-4 shadow-md rounded-md bg-white border-3 border-stone-400"
        >
          <p className="text-base">Assignment</p>
          <p className="text-xs italic">{id}</p>
          <p className="text-xs italic">{data.content1}</p>
          <p className="text-xs italic">type</p>

        </div>
      </EdgeLabelRenderer>
    </>
  );
}