import React from "react";

export default function Overview(props) {
  return (
    <ul className="tasksContainer">
      {props.list.map((listItem, index) => (
        <li key={`${listItem}${index}`}>{listItem}</li>
      ))}
    </ul>
  );
}
