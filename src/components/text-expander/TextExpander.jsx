import { useState } from "react";

const TextExpander = ({
  children = "",
  isOpen,
  color,
  collapseText,
  expandText,
  collapsedNumber,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  return (
    <div>
      {isExpanded ? children : children.slice(0, collapsedNumber) + "..."}
      {isExpanded ? (
        <a
          style={{ color: color }}
          href="#"
          onClick={() => setIsExpanded(false)}
        >
          {collapseText}
        </a>
      ) : (
        <a
          style={{ color: color }}
          href="#"
          onClick={() => setIsExpanded(true)}
        >
          {expandText}
        </a>
      )}
    </div>
  );
};
export default TextExpander;
