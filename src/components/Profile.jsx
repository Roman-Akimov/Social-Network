import React from 'react';


function Profile() {
    return (
        <div className='content'>
            <div className='background-photo'>
                <img
                    src='https://avatars.mds.yandex.net/i?id=62db6ac025902ff4187616a77d83b313_l-6966967-images-thumbs&ref=rim&n=13&w=800&h=800'/>
            </div>
            <div className='avatar'>
                <img src='https://i.pinimg.com/originals/cd/21/82/cd2182297121cc57a752e0d8767ff833.jpg'/> +
                description
            </div>
            <div>
                My posts
            </div>

            <div>
                New posts
            </div>

            <div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>

            </div>

        </div>
    );
}

export default Profile;