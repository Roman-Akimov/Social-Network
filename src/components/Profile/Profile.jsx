import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://steamuserimages-a.akamaihd.net/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;