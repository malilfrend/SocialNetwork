import React, {useRef} from 'react';
import classes from "./Messages.module.css";
import Message from "./Message/Message";
import MessageReduxForm from "./MessageForm";

const Messages = (props) => {
    
    const messagesElements = props.dialogsPage.messagesData
        .map(m =>
            <Message text={m.text} id={m.id} key={Math.random()}/>
        ).reverse()
    
    const onSubmit = (message) => {
        props.addNewMessage(message)
    }
    
    return (
        <div className={classes.messages}>
            <div className={classes.messagesElements}>
                { messagesElements }
            </div>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Messages;
