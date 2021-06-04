import React,{useRef} from "react";
import classes from "./Note.module.css";
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { colors } from "./Color";

const Note = (props) => {
  let starEle;
  const note = useRef(null);

  if (props.data.starred) {
    starEle = <i className="bi bi-star-fill"></i>;
  } else {
    starEle = <i className="bi bi-star"></i>;
  }
  return (
      <div>
        <div
          suppressContentEditableWarning={true}
          style={{background: props.data.color}}
          className={classes.sticky}>
          <span className={classes.starIcon} ref={note} onClick={props.starChange}>{starEle}</span>
          <p 
            contentEditable="true"
            onInput={(e)=>props.edit(e)} 
            suppressContentEditableWarning={true}
            className={classes.note}>
          </p>
          <div className={classes.footer}>
            <label>{props.data.date}</label>
            <div>
              <span className={classes.deleteIcon} onClick={props.delete}><i className="bi bi-trash"></i></span>
              <DropDownButtonComponent className={classes.dropdown} id="element" items={colors} select={(ele)=>props.colorChange(ele)}> 
                <i className="bi bi-palette" style={{fontSize: '18px', paddingLeft: '5px'}}></i>
              </DropDownButtonComponent>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Note;