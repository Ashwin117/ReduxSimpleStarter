import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props) {
		//this.props.submitForm(props);
		this.context.router.push('/new');
	}

	render() {
		const handleSubmit = this.props.handleSubmit;
		const email = this.props.fields.email;
		const password = this.props.fields.password;

		return (
			<form className="col-md-6" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div className="container-fluid">
					<div className={`form-group ${email.touched && email.invalid ? 'has-danger': ''}`}>
						<input type="email" className="form-control text-input"
							placeholder="Email"
							{...email}/>
						<div className="text-help">
							{email.touched ? email.error : ''}
						</div>
					</div>
					<div className={`form-group ${password.touched && password.invalid ? 'has-danger': ''}`}>
						<input type="password" className="form-control text-input"
							placeholder="Password"
							{...password}/>
						<div className="text-help">
							{password.touched ? password.error: ''}
						</div>
					</div>
					<button action="submit" className="btn btn-default col-md-12">
						Log in to PayPal
					</button>
				</div>
				<hr />
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.email || (values.email && !values.email.includes('@'))) {
		errors.email = 'Email is required';
	}
	if (!values.password) {
		errors.password = 'Password is required';
	}

	return errors;
}

export default reduxForm({
	form: 'Login',
	fields: ['email', 'password'],
	validate
}, null, null)(Login);

