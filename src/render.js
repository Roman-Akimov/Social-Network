import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rendererEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
    reportWebVitals();
}