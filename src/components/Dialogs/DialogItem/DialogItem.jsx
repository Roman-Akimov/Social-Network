import React from "react";
import s from "./../Dialogs.module.css"
import d from "./DialogItem.module.css"
import {NavLink} from "react-router";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={d.avatar}>
                <img src={props.avatar} alt="avatar"/>

            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;