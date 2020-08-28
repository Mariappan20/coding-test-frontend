import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import CreatePost from './components/CreatePost/CreatePost';

import './App.css';

const App = () => {
	return (
	
		 <Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/createPost" component={CreatePost} />
			</Switch>	
		</Router>
		
	);
	
}
export default App;
