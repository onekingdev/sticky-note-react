import React from 'react'
import classes from "./Headerbar.module.css"
const Headerbar = (props) => {
    return (
        <div className={classes.Headerbar}>
        <h2 className={classes.Logo}>Sticky Notes</h2>
        <div className={classes.MenuIcons}>
        
        {props.children}
        </div>
         
        </div>
    )
}

export default Headerbar
