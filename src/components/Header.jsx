import React from 'react';
import s from "./Header.module.css";

function Header() {
    return (
        <header className={s.header}>
            <img
                src='https://images.squarespace-cdn.com/content/v1/5f6cebdc75d0902e2d72e718/1601039514716-ZOEQXGTE9S9TVPSV64J8/IMG.png'/>
        </header>
    );
}

export default Header;