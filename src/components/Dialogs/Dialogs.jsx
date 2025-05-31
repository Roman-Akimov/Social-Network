import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

    let refAddText = React.createRef();

    let addText = () => {
        let text = refAddText.current.value;
        props.addMessage(text);
    }

    let dialogsItems = props.dialogs.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>  );
    let messagesElements = props.messages.map( m => <Message message={m.message} ava={m.ava} name={m.name}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            {/*сообщения*/}
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={refAddText}></textarea>
                <button onClick={addText}>TEXT</button>
            </div>

        </div>
    )

}

export default Dialogs;