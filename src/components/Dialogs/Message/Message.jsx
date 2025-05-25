import React from "react";
// import s from "./../Dialogs.module.css"
import d from "./Message.module.css"


export const Message = (props) => {

    const isUser = props.name === "user";
    const messageText = props.name === "other" ? d.userMessage : d.otherMessage;
    return (
        <div>
            <textarea></textarea>
            <div className={messageText}>
                {isUser && <img src={props.ava}/>}
                <span>{props.message}</span>
                {!isUser && <img src={props.ava}/>}


            </div>
        </div>
    );
}