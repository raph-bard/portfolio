import { useState } from "react";

export default function InfoButton({ children }) {
  const [infoPopup, setInfoPopup] = useState(false);

  return (
    <div className="infos-container pr-d-none">
      <button
        onClick={() => setInfoPopup(!infoPopup)}
        type="button"
        className={`icon-button${
          infoPopup === true ? " icon-close" : " icon-infos"
        }`}
      >
        i
      </button>
      <div className={`info-note${infoPopup === true ? " active" : ""}`}>
        {children}
      </div>
    </div>
  );
}
