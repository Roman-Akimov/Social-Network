import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id:1, name: "Alex"},
    {id:2, name: "Rex"},
    {id:3, name: "John"},
    {id:4, name: "Roman"},
    {id:5, name: "Dendi"},
    {id:6, name: "Sergei"},
]
let messages = [
    {id:1, message: "hi"},
    {id:2, message: "hello"},
    {id:3, message: "how are u"},
    {id:4, message: "fine thx"},
]

let postData = [
    {id: 1, message:'Hi, how are u?', likesCount:'12'},
    {id: 2, message:'its mt first post!)', likesCount:'43'},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} postData={postData}/>
  </React.StrictMode>
);



reportWebVitals();
