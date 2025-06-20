import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {
    let state = props.store.getState();

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;