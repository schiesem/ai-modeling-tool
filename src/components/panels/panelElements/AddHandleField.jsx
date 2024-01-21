import AddHandleButton from "./AddHandleButton";

export default function AddHandleField({ activeElementId, type }) {
  return (
    <div className="flex flex-col text-center pt-4 pb-2">
      <p>-- Generate Handle --</p>
      <div className="flex flex-row space-x-4 pt-1">
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
          Rig
        </AddHandleButton>
        <AddHandleButton
          activeElementId={activeElementId}
          handleSide="bottom"
          type={type}
        >
          Bot
        </AddHandleButton>
        <AddHandleButton
          activeElementId={activeElementId}
          handleSide="top"
          type={type}
        >
          Top
        </AddHandleButton>
      </div>
    </div>
  );
}
