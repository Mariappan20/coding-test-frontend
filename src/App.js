import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';

import './App.css';

const App = () => {
	return (
	
		 <Router>
			<Switch>
				<Route path="/" exact >
					<Home />
				</Route>
				<Route path="/Login">Login Page</Route>
				<Route path="/signup">Signup Page</Route>
			</Switch>	
		</Router>
		
	);
	
}
export default App;
