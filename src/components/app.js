import React from 'react';
import { Component } from 'react';
import Header from './header';
import LoginForm from '../containers/login_form';

export default class App extends Component {
	render() {
    	return (
    		<div>
	      		<Header />
    	  		<LoginForm />
    	  	</div>
    	);
  	}
}
