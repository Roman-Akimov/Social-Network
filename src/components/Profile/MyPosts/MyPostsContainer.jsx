import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                    let onPostChange = (text) => {
                        let action = updateNewPostActionCreator(text);
                        store.dispatch(action);
                    }

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={store.getState().profilePage.posts}
                                    newPostText={store.getState().profilePage.newPostText}/>
                }

            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;