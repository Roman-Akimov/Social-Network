import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsItems = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} ava={m.ava} name={m.name}/>);
    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            {/*сообщения*/}
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={state.newMessagesText}/>
                </div>

                <button onClick={onAddMessage}>TEXT</button>
            </div>

        </div>
    )

}

export default Dialogs;