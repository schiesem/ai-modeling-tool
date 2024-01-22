import { useRef } from "react";


export default function LoadButton() {
const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
    console.log(inputFile.files[0])
    console.log("Executed")

  };

  return (
    <>
      <div className="text-center px-4 py-4 shadow-md rounded-lg bg-white border border-stone-400">
        <input
          type="file"
          id="file"
          name ="file"
          accept =".json, .JSON"
          ref={inputFile}
          style={{ display: "none" }}
        />
        <button onClick={onButtonClick}>Load</button>
      </div>
    </>
  );
}
