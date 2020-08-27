import React from 'react';
import { Link } from 'react-router-dom';
import  { Container, Row, Col } from 'react-bootstrap';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navBar">
			<Container >
				<Row>
					<Col className="navBar__siteName">
						<Link to="/" className="navBar__link">Connect</Link>
					</Col>
					<Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
						<Link to="/login" className="navBar__link">Login</Link>
					</Col>
					<Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
						<Link to="/signup" className="navBar__link">Signup</Link>
					</Col>
				</Row>
			</Container>
		</nav>
	);
} 

export default Navbar;