import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<HashRouter>
			<Provider store={store}>
				< App />
			</Provider>
	</HashRouter>
)



