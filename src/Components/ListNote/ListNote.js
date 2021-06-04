
import React from "react";
import Auxilary from "../../hoc/Auxilary";
import classes from "./ListNote.module.css"

const ListNote = (props) => {
  return (
    <Auxilary>
      <img alt="save-icon" className={classes.ListNote} onClick={props.clicked} src="https://img.icons8.com/ios-filled/30/000000/list.png"/>
    </Auxilary>
  );
};

export default ListNote;
