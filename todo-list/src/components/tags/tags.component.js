import React from "react";
import "./tags.component.css";

const Tags = ({ toDo }) => {
  const tagColors = {
    urgent: "#ff0000cb",
    medium: "#ffff22",
    low: "#40e0d0",
    ui: "#a21ce0d5",
    dev: "#00a2ff",
  };
  console.log(toDo);
  return (
    <div className="tags-container">
      {toDo.tags.map((tag) => (
        <div
          className="tag"
          key={tag}
          style={{
            backgroundColor: tagColors[tag] || "#ff7f50",
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
export default Tags;
