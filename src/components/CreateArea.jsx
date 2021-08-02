import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [focus, setFocus] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.onAdd({ title: title, content: content });
          setTitle("");
          setContent("");
          setFocus(false);
          event.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          style={{display: focus ? "inline" : "none"}}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={focus ? 3 : 1}
          onChange={(event) => setContent(event.target.value)}
          value={content}
          onClick={() => setFocus(true)}
        />
        <Zoom in={focus ? true : false}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
