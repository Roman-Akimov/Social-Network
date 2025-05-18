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
    return (
        <div className={s.dialogs}>
            {/*имена*/}
            <div className={s.dialogsItems}>

                <DialogItem name="Alexsandr" id='1'/>

                <DialogItem name="Mark" id='2'/>

                <DialogItem name="Andrey" id='3'/>

                <DialogItem name="Yury" id='4'/>

                <DialogItem name="Jho" id='5'/>

            </div>
            {/*сообщения*/}
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='how are u'/>
                <Message message='yo'/>
                <Message message='yo'/>
                <Message message='yo'/>

            </div>

        </div>
    )

}

export default Dialogs;