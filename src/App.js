import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
	return (
	
		  <Router>
			<Switch>
				<Route path="/login">Login Page</Route>
				<Route path="/signup">Signup Page</Route>
				<Route path="/">Home Page</Route>
			</Switch>	
		</Router>
		
	);
	
}
export default App;
