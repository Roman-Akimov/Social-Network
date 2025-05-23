import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {

    // let postData = [
    //     {id: 1, message:'Hi, how are u?', likesCount:'12'},
    //     {id: 2, message:'its mt first post!)', likesCount:'43'},
    // ]

    let postsElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <button>Add post</button>
            </div>

            <div className='s.posts'>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;