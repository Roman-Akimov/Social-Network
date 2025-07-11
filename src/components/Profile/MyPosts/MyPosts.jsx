import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className='s.posts'>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;