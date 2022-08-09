import React, {useRef} from 'react';
import classes from "./Messages.module.css";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";

const Messages = (props) => {
    
    const messagesElements = props.dialogsPage.messagesData
        .map(m =>
            < Message text={m.text} id={m.id} key={m.id} />
        )

    const newMessage = useRef()

    const onAddNewMessage = () => {
        props.addNewMessage()
        // props.dispatch(addNewMessageActionCreator())
    }

    const onUpdateMessageText = () => {
        let textAreaText = newMessage.current.value
        props.updateMessageText(textAreaText)
        // props.dispatch(updateMessageTextActionCreator(textAreaText))
    }

    return (
        <div className={classes.messages}>
            { messagesElements }
            <textarea
                className={classes.textarea}
                ref={ newMessage }
                value={ props.dialogsPage.newMessageText }
                onChange={ onUpdateMessageText }
                placeholder={'Enter your message'}
            />
            <button
                className={classes.send_btn}
                onClick={ onAddNewMessage }
            >
                Send
            </button>
        </div>
    );
};

export default Messages;