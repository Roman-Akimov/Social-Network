import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            {/*имена*/}
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Alexandr</div>
                <div className={s.dialog}>Mark</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Yury</div>
                <div className={s.dialog}>Jho</div>
            </div>
            {/*сообщения*/}
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>hello</div>
                <div className={s.message}>How re u?</div>
            </div>

        </div>
    )

}

export default Dialogs;