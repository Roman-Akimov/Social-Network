import React from 'react';
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div className="s.posts">
            <div>
                <img src='https://steamuserimages-a.akamaihd.net/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;