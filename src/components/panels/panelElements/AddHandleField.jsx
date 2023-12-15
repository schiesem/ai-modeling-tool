import AddHandleButton from "./AddHandleButton";

export default function AddHandleField({ activeElementId, type }) {
  return (
    <div className="flex flex-col">
      <p>Generate Handle:</p>
      <div className="flex flex-row space-x-4">
        <AddHandleButton
          activeElementId={activeElementId}
          handleSide="left"
          type={type}
        >
        Left
        </AddHandleButton>
        <AddHandleButton
          activeElementId={activeElementId}
          handleSide="right"
          type={type}
        >
        Right
        </AddHandleButton>
        <AddHandleButton
          activeElementId={activeElementId}
          handleSide="top"
          type={type}
        >
        Top
        </AddHandleButton>
        <AddHandleButton
          activeElementId={activeElementId}
          handleSide="bottom"
          type={type}
        >
        Bot
        </AddHandleButton>
      </div>
    </div>
  );
}
