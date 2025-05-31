import React from 'react';
import s from "./Post.module.css";


function Post(props) {

    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/23/d9/2a/23d92af013c486ae8c11d2814d9affa0.jpg'/>
            post 1
            <br></br>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>

    );
}

export default Post;