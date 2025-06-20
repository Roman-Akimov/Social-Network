import React from "react";
import s from "./Dialogs.module.css"
import {addNewMessageText, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageText(text));
    }

    let addMessage = () => {
        props.store.dispatch(addNewMessageText());
    }

    return (<Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange}
                     dialogsPage={state}
    />)

}

export default DialogsContainer;