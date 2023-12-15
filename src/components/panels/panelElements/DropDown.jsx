import { useStore } from "../../../store";

const selector = (store) => ({
  getActiveElementId: store.getActiveElementId,
  getElementDataById: store.getElementDataById,
  setNodeType: store.updateNode,
  setEdgeType: store.updateEdge,
});

export default function DropDown({ typeElements, typeKey }) {
  const store = useStore(selector);
  const activeElementId = store.getActiveElementId();

  return (
    <select
      className="nodrag bg-stone-100 hover:bg-stone-200"
      onChange={(event) => {
        // conditional selecting the update function
        if (typeKey == "communicationType") {
          store.setEdgeType(activeElementId, {
            [typeKey]: event.target.value,
          });
        } else if (typeKey == "functionType" || typeKey == "resourceType") {
          return store.setNodeType(activeElementId, {
            [typeKey]: event.target.value,
          });
        }
      }}
      value={store.getElementDataById(activeElementId).data[typeKey]}
    >
      <option value="undefined" selected disabled hidden>
        Choose here
      </option>
      {typeElements.map((element) => (
        <option key={element[typeKey]} value={element[typeKey]}>
          {element[typeKey]}
        </option>
      ))}
    </select>
  );
}
