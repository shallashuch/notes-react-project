import React from "react";

export default function CreateNote() {
  return(
    <div className="CreateNote">
      <form>
        <input  name="title" placeholder="Title"/>
        <textarea name="content" placeholder="Take a note..." rows={3}/>
        <button>+</button>
      </form>
    </div>
  )
}