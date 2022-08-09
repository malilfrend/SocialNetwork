import React from 'react';
import classes from './Dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import DialogItemsContainer from "./DialogItems/DialogItemsContainer";

const Dialogs = (props) => {
    
    return (
        
        <div className={classes.dialogs}>
            
            <div className={classes.dialogs_items}>
                < DialogItemsContainer />
            </div>
            
            <MessagesContainer/>
        
        </div>
    )
}



export default Dialogs;