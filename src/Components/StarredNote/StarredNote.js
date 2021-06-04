import React from "react";
import Auxilary from "../../hoc/Auxilary";
import classes from "./StarredNote.module.css"

const StarredNote = (props) => {
  return (
    <Auxilary>
      <img alt="save-icon" onClick={props.clicked} src="https://img.icons8.com/ios-filled/30/000000/star.png"/>
    </Auxilary>
  );
};

export default StarredNote;
