import React from "react";
import Fab from "@material-ui/core/Fab"
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
