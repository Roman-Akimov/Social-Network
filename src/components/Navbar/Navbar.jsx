import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router";
import Post from "../Profile/MyPosts/Post/Post";


function Navbar(props) {
    return (<nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={navData => navData.isActive? s.active : s.item}>Profile</NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/dialogs' className={navData => navData.isActive? s.active : s.item}>Message</NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/users' className={navData => navData.isActive? s.active : s.item}> Users </NavLink>
        </div>

        <div className={s.item}>
            <NavLink>News</NavLink>
        </div>

        <div className={s.item}>
            <NavLink>Music</NavLink>
        </div>

        <div className={s.item}>
            <NavLink>Settings</NavLink>
        </div>

        {/*<div className={s.friendOnline}>*/}
        {/*    <p>Friends online</p>*/}
        {/*    {props.friends.map(p => (*/}
        {/*        <div>*/}
        {/*            <img src={p.ava}/>*/}
        {/*            {p.name}*/}
        {/*        </div>*/}
        {/*    ))}*/}
        {/*</div>*/}

    </nav>);
}

export default Navbar;