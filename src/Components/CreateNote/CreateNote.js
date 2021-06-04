
import React from "react";
import Auxilary from "../../hoc/Auxilary";
import classes from "./CreateNote.module.css";

const CreateNote = (props) => {
  return (
    <Auxilary>
      <img className={classes.CreateNote} onClick={props.clicked} alt='addnote' src="https://icon-library.com/images/add-note-icon/add-note-icon-11.jpg"/>
    </Auxilary>
  );
};

export default CreateNote;