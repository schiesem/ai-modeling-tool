import { useStore } from "../../../store";

const selector = (store) => ({
  setNodeName: store.updateNode,
  getElementDataById: store.getElementDataById,
});

export default function ElementDataInput({ activeElementId }) {
  const store = useStore(selector);

  return (
    <div>
      <input
        className="bg-stone-100 hover:bg-stone-200"
        type="text"
        value={store.getElementDataById(activeElementId).data.name}
        onChange={(event) => {
          store.setNodeName(activeElementId, { name: event.target.value });
        }}
      />
    </div>
  );
}
