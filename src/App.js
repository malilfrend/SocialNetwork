import React, {useEffect, Suspense, lazy} from "react";
import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
// import Dialogs from "./components/Dialogs/Dialogs";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
import './App.css'
// import FriendsContainer from "./components/Friends/FriendsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import withRouter from "./components/HOC/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"));
const News = lazy(() => import("./components/News/News"));
const Music = lazy(() => import("./components/Music/Music"));
const Settings = lazy(() => import("./components/Settings/Settings"));
const FriendsContainer = lazy(() => import("./components/Friends/FriendsContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
// const Login = lazy(() => import("./components/Login/Login"));


const App = (props) => {
	
	const initializeAppFunc = () => {
		props.initializeApp()
	}
	
	useEffect(() => {
		initializeAppFunc()
	})
	
	if (!props.initialized) return <Preloader/>
	
	return (
		<div className='app-wrapper' role={"main"}>
			<HeaderContainer/>
			<Navbar/>
			<Suspense fallback={<Preloader/>}>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile/*' element={<ProfileContainer/>}/>
						<Route path='/profile/:userId' element={<ProfileContainer/>}/>
						<Route path='/dialogs' element={<Dialogs/>}/>
						<Route path='/news' element={<News/>}/>
						<Route path='/music' element={<Music/>}/>
						<Route path='/settings' element={<Settings/>}/>
						<Route path='/friends' element={<FriendsContainer/>}/>
						<Route path='/users' element={<UsersContainer/>}/>
						<Route path='/login' element={<Login/>}/>
					</Routes>
				</div>
			</Suspense >
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})
)(App)