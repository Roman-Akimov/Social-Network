import React from 'react';
import s from "./Navbar.module.css";


function Navbar() {
    return (<nav className={s.nav}>
            <div className={s.item}><a>Profile</a></div>
            {/*/!*<div className={`${s.item} ${s.active}`}><a>Message</a></div>*!/  смотрел работу модулей с интерполяцией*/}
            <div className={s.item}><a>Message</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
        </nav>);
}

export default Navbar;