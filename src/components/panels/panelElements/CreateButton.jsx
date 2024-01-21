import { useStore } from "../../../store";

const selector = (store) => ({
  createNode: store.createNode,
});

export default function CreateButton({ nodeType, children }) {
  const store = useStore(selector);
  return (
    <>
      <div className="text-center px-4 py-4 shadow-md rounded-lg bg-white border border-stone-400">
        <button onClick={() => store.createNode(nodeType)}>{children}</button>
      </div>
    </>
  );
}
