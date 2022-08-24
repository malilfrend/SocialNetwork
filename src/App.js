import React, {useEffect, Suspense, lazy} from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import withRouter from "./components/HOC/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));



const App = (props) => {
	
	const initializeAppFunc = () => {
		props.initializeApp()
	}
	
	useEffect(() => {
		initializeAppFunc()
	})
	
	if (!props.initialized) return <Preloader/>
	
	return (
		<div className='app-wrapper'>
			<HeaderContainer/>
			<Navbar/>
			<Suspense fallback={<Preloader/>}>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/" element={<Navigate to="/profile" />} />
						<Route path='/profile/*' element={<ProfileContainer/>}/>
						<Route path='/profile/:userId' element={<ProfileContainer/>}/>
						<Route path='/dialogs/:userId' element={<Dialogs/>}/>
						<Route path='/dialogs' element={<Dialogs/>}/>
						<Route path='/users' element={<UsersContainer/>}/>
						<Route path='/login' element={<Login/>}/>
						<Route path='*' element={<div>404 NOT FOUND</div>}/>
					</Routes>
				</div>
			</Suspense>
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