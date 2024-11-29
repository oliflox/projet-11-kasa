import { useState } from "react";

export default function Collapse({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </button>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}
