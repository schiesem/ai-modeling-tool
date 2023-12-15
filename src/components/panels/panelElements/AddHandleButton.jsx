import { useStore } from "../../../store";

const selector = (store) => ({
  createHandle: store.createHandle,
});

export default function AddHandleButton({
  activeElementId,
  handleSide,
  type,
  children,
}) {
  const store = useStore(selector);

  return (
    <>
      <div className="w-11 text-xs text-center px-3 py-3 shadow-md rounded-lg bg-white border-3 border-stone-400">
        <button
          onClick={() => store.createHandle(activeElementId, handleSide, type)}
        >
          {children}
        </button>
      </div>
    </>
  );
}
