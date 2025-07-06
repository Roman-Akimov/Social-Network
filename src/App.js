import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar />{/*friends={props.state.sidebar.friends}*/}
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile/>}  />

                        <Route path='/dialogs/*' element={<DialogsContainer/>}  />

                        <Route path='/users/*' element={<Users/>}   />
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
