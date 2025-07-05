import React from "react";
import {addNewMessageText, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageText());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;