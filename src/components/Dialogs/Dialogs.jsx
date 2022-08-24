import React from 'react';
import classes from './Dialogs.module.css'
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {addNewMessageActionCreator} from "../../redux/dialogs-reducer";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {compose} from "redux";
import withRouter from "../HOC/withRouter";
import {useParams} from "react-router-dom";

const Dialogs = (props) => {
    
    let {userId} =  useParams()
    
	return (
		
		<div className={classes.dialogs}>
			
			<div className={classes.dialogs_items}>
				<DialogItems dialogsPage={props.dialogsPage}/>
			</div>
            {
                userId ? <Messages
                    dialogsPage={props.dialogsPage}
                    addNewMessage={props.addNewMessage}
                />
                    : null
            }
            
		</div>
	)
}


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addNewMessage: (message) => {
			dispatch(addNewMessageActionCreator(message))
		},
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect)(Dialogs)
