import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import './App.css'
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={ <Dialogs/> } />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<FriendsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
