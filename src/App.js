import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile*' element={<Profile postData={props.postData}/>}/>}/>
                        <Route path='/dialogs*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        {/*пока не добавлено*/}
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
