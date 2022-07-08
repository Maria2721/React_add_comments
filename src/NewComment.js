import React from "react";

export default function NewComment(props) {
  const { comment, color } = props;

  return (
    <div style={{ fontWeight: "bolder", color: "#" + color }}>{comment}</div>
  );
}
