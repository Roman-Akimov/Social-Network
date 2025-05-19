import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>

    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: "Alex"},
        {id:2, name: "Rex"},
        {id:3, name: "John"},
        {id:4, name: "Roman"},
        {id:5, name: "Dendi"},
        {id:6, name: "Sergei"},
    ]
    let messages = [
        {id:1, message: "hi"},
        {id:2, message: "hello"},
        {id:3, message: "how are u"},
        {id:4, message: "fine thx"},
    ]

    let dialogsItems = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>  );
    let messagesElements = messages.map( m => <Message message={m.message}  />);

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