import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;