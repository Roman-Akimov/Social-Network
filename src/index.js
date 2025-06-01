import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewMessageText, updateNewPostText, addMessage, subscribe} from "./redux/state";
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
    reportWebVitals();
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

