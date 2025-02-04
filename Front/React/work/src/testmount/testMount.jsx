
import React from "react";

export default function testMount(props) {
  function clickHandler(id) {
    props.onRemove(id);
  }
  return (
    <li>
      {props.name}
      <button onClick={() => clickHandler(props.id)}>remove</button>
    </li>
  );
}
