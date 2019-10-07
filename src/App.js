import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Room from './components/pages/Room';


function App() {
	return (
		<Router>
			<div className='App' >
				<NavBar />
				<Route path='/room/:id' component={Room} />
				<Route exact path='/' component={Landing} />
			</div>
		</Router>
	);
}

export default App;

