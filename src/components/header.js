import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="login-title"> 
					<h3> Log in to apply </h3>
				</div>
				<p>
					Use your PayPal account to apply even faster.
				</p>
			</div>
		);
	}
}