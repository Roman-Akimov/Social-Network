import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {


    let dialogsItems = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>  );
    let messagesElements = props.messages.map( m => <Message message={m.message}  />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            {/*сообщения*/}
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )

}

export default Dialogs;