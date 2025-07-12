import React from "react";
import d from "./Message.module.css"


export const Message = (props) => {

    const isUser = props.name === "user";
    const messageText = props.name === "other" ? d.userMessage : d.otherMessage;
    return (

        <div className="body">
            <div className={messageText}>
                {isUser && <img src={props.ava}/>}
                <span>{props.message}</span>
                {!isUser && <img src={props.ava}/>}
            </div>
        </div>

    );
}