import React from 'react';
import s from "./Profile.module.css";


function Profile() {
    return (
        <div className={s.content}>
            <div className={s.backgroundPhoto}>
                <img
                    src='https://avatars.mds.yandex.net/i?id=62db6ac025902ff4187616a77d83b313_l-6966967-images-thumbs&ref=rim&n=13&w=800&h=800'/>
            </div>
            <div className={s.avatar}>
                <img src='https://i.pinimg.com/originals/cd/21/82/cd2182297121cc57a752e0d8767ff833.jpg'/> +
                description
            </div>
            <div>
                My posts
            </div>

            <div>
                New posts
            </div>

            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>

            </div>

        </div>
    );
}

export default Profile;