import React from "react";

export default function AddedNote(props) {
  return (
    <div className="AddedNote">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> props.delete(props.id)}>DELETE</button>
    </div>
  )
}