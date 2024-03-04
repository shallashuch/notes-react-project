import React from "react";

export default function CreateNote(props) {
  return(
    <div className="CreateNote">
      <form onSubmit={props.submitNote}>
        <input  
          name="title" 
          placeholder="Title"
          required
          value={props.valueTitle}
          onChange={(event)=> {
            props.changeTitle(event);
          }}
         />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows={3}
          value={props.valueContent}
          onChange={(event)=> {
            props.changeContent(event);
          }}
        />
        <button>+</button>
      </form>
    </div>
  )
}