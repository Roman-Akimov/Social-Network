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
                <Navbar friends={props.state.sitebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            profilePage={props.state.profilePage}
                            newPostText={props.state.newPostText}
                            dispatch={props.dispatch}

                        />} />
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogs={props.state.dialogsPage.dialogs}
                            messages={props.state.dialogsPage.messages}
                            userData={props.state.avatarUser}
                            dispatch={props.dispatch}
                            newMessagesText={props.state.dialogsPage.newMessagesText}
                        />}/>
                        {/*пока не добавлено*/}
                        {/*<Route path='/profile' element={<Profile/>}/>*/}
                        {/*<Route path='/profile' element={<Profile/>}/>*/}
                        {/*<Route path='/profile' element={<Profile/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
