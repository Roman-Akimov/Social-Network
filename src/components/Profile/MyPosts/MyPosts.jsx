import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>

            <div className='s.posts'>
                <Post message='Hi, how are u?' count={15} value='ddfd'/>
                <Post message="It's my first post" count={32}/>
            </div>

        </div>
    );
}

export default MyPosts;