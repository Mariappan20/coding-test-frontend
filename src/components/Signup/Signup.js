import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios-config';

import './Signup.css';


const Signup = () => {
	
		const [ email, setEmail ] = useState('');
		const [ password, setPassword ] = useState('');
		const [ dob, setDob ] = useState('');
		const [ address, setAddress ] = useState('');
		const [ phoneNumber, setPhoneNumber ] = useState('');
		const [ image, setImage ] = useState('');
		
		const [ emailEmpty, setEmailEmpty ] = useState(false);
		const [ passwordEmpty, setPasswordEmpty ] = useState(false);
		const [ dobEmpty, setDobEmpty ] = useState(false);
		const [ addressEmpty, setAddressEmpty ] = useState(false);
		const [ phoneNumberEmpty, setPhoneNumberEmpty ] = useState(false);
		const [ invalidEmail, setInvalidEmail ] = useState(false);
		const [ invalidPassword, setInvalidPassword ] = useState(false);
		let history = useHistory();
		
		
		
		
		// let passwordPattern = /^[A-Za-z]\w{7,14}$/;
		// let checkPasswordPattern = passwordPattern.match(password);
		// console.log('pwd pattern', checkPasswordPattern);
		
		const postSignUpData = (e) => {
		e.preventDefault();
		
		
		if( !email ) {
			setEmailEmpty(true);
		}
		else if( !password ){
			setPasswordEmpty(true);
		}
		else if( !dob ){
			setDobEmpty(true);
		}
		else if( !address ){
			setPasswordEmpty(true);
		}
		else if( !phoneNumber ){
			setPasswordEmpty(true);
		}
		
		else {
			axios.post('/signup',{
				email: email,
				password: password,
				dob: dob,
				address: address,
				phoneNumber: phoneNumber,
				
			})
			.then( response => {
				console.log(response);
				history.push('/login');
				setEmail('');
				setPassword('');
				
			})
			.catch( err => console.log(err));
		}
			
	}
	

		
		const emailHandler = ( event ) => {
			let email = event.target.value;
			let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			let checkEmailPattern = emailPattern.test(email);
			console.log('email pattern', checkEmailPattern);
			
			setEmail(email);
			if( !email ) {
				setEmailEmpty( true );
			}
			else {
				setEmailEmpty(false);
				setInvalidEmail(true);
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

		const dobHandler = ( event ) => {
			let dob = event.target.value;
			setDob(dob);
			if( !dob ) {
				setDobEmpty( true );
			}
			else {
				setDobEmpty(false);
			}
		
		}

		const addressHandler = ( event ) => {
			let address = event.target.value;
			setAddress(address);
		
			if( !address ) {
				setAddressEmpty( true );
			}
			else {
				setAddressEmpty(false);
			}
		}

		const phoneNumberHandler = ( event ) => {
			
			let phoneNumber = event.target.value;
			setPhoneNumber(phoneNumber);
			
			if( !phoneNumber ) {
				setPhoneNumberEmpty( true );
			}
			else {
				setPhoneNumberEmpty(false);
			}
			
		}	
		
		
		
	return (
		<div className="signup">
			<form onSubmit={postSignUpData}>
			     <div className="signup__title">
					<h4>Signup</h4>
				 </div>
				<div>
					<input type="email" 
						   className="signup__input" 
						   placeholder="Email Address"
						   value={email}
						   onChange={emailHandler} />
					{ emailEmpty ? <p className="error">Enter an Email Address</p> : null  }	   
					{ invalidEmail ? <p className="error">Enter a Valid Email</p> : null  }	   
				</div>
				<div>
					<input type="password" 
						   className="signup__input"
						   placeholder="Create Password"
						   value={password}
						   onChange={passwordHandler} />
					{ passwordEmpty ? <p className="error">Please Enter the Password</p> : null  }	   
				</div>
				<div>
					<label>Date of birth</label>
					<input type="date" 
						className="signup__input"
						value={dob}
						onChange={dobHandler}	/>
					{ dobEmpty ? <p className="error">Select your Date of birth</p> : null  }
				</div>
				<div>
					<label>Address</label>
					<input type="text" 
						   className="signup__input"
						   value={address}
						   onChange={addressHandler} />
					{ addressEmpty ? <p className="error">Enter your address</p> : null  }		
				</div>
				<div>
					<label>Phone Number</label>
					<input type="text" 
						   className="signup__input"
						   value={phoneNumber}
						   onChange={ phoneNumberHandler }
							/>
					{ phoneNumberEmpty ? <p className="error">Enter your phone number</p> : null  }		
				</div>
				<div>
					<label>Upload  Profile Picture</label>
					<input type="file" />
				</div>
				<div>
					<label></label>
				</div>	
				<button className="signup__button">Signup</button>
				<div className="signup__existingAccount">
					<small>Already have an account ? <Link to="/login" className="signup__existingLink">Login</Link></small>
				</div>
			</form>
		</div>
	);
}

export default Signup;