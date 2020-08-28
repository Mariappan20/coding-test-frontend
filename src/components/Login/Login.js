import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios-config';

import './Login.css';


const Login = () => {
	
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ emailEmpty, setEmailEmpty ] = useState(false);
	const [ passwordEmpty, setPasswordEmpty ] = useState(false);
	
	
	
	const postLoginData = (e) => {
		e.preventDefault();
		console.log('email', email);
		console.log('password', password);
		
		if( !email ) {
			setEmailEmpty(true);
		}
		else if( !password ){
			setPasswordEmpty(true);
		}
		else {
			axios.post('/posts',{
				email: email,
				password: password
			})
			.then( response => {
				console.log(response);
				setEmail('');
				setPassword('');
				
			})
			.catch( err => console.log(err));
		}
			
	}
	
	const emailHandler = ( event ) => {
		let email = event.target.value;
		
		setEmail(email);
		if( !email ) {
			setEmailEmpty( true );
		}
		else {
			setEmailEmpty(false);
		}
	}
		
	const passwordHandler = ( event ) => {
		let password = event.target.value;
		setPassword( password );
		if( !password ) {
			setPasswordEmpty( true );
		}
		else {
			setPasswordEmpty(false);
		}
	}
	return (
		<div className="login">
			 <form onSubmit={postLoginData} >
				 <div className="login__title">
				     <h4>Connect</h4>
				 </div> 
				<div>
					<input type="text" 
						placeholder="Email address"
						className="login__input"
						value={email}
						onChange={ emailHandler }	
						/>
					{ emailEmpty ? <p className="error">Enter an Email Address</p> : null  }	
				</div>
				<div>
					<input type="password"
						placeholder="Password"
						className="login__input"
						value={password}
						onChange={ passwordHandler }
						/>
					{ passwordEmpty ? <p className="error">Please Enter the Password</p> : null  }	
				</div>	
				<button className="login__button"  >Login</button>
				<div className="login__createAccount">
					<small>New to Connect ? <Link to="/signup" className="login__createLink">Create an account</Link></small>
				</div>
			 </form>
		</div>
	);
}

export default Login;