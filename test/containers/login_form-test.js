import { renderComponent, expect } from '../test_helper';
import LoginForm from '../../src/containers/login_form';

describe('LoginForm', () => {
	var component;
	const emailInput = 'input:eq(0)';
	const passwordInput = 'input:eq(1)';

	beforeEach(() => {
		component = renderComponent(LoginForm);
	});

	it('Shows a form group', () => {
		expect(component.find('.form-group')).to.exist;
	});

	it('Has an input for email and for password', () => {
		expect(component.find('input').length).to.equal(2);
	});

	it('Has a button', () => {
		expect(component.find('button')).to.exist;
	});

	it('Has a divider', () => {
		expect(component.find('hr')).to.exist;
	});

	describe('Entering in email text only', () => {
		beforeEach(() => {
			component.find(emailInput).simulate('change', 'asundar@paypal.com');
		});

		it('Has text in the input field', () => {
			expect(component.find(emailInput)).to.have.value('asundar@paypal.com');
		});

		it('Should throw error when submitting form as other necessary fields were untouched', () => {
			component.simulate('submit');
			expect(component.find('.has-danger')).to.exist;
		});
	});

	describe('Entering in password text only', () => {		
		beforeEach(() => {
			component.find(passwordInput).simulate('change', 'asdf123');
		});

		it('Has text in the input field', () => {
			expect(component.find(passwordInput)).to.have.value('asdf123');
		});

		it('Should throw error when submitting form as other necessary fields were untouched', () => {
			component.simulate('submit');
			expect(component.find('.has-danger')).to.exist;
		});
	});

	describe('Entering in both email and password texts', () => {

		beforeEach(() => {
			component.find(emailInput).simulate('change', 'asundar@paypal.com');
			component.find(passwordInput).simulate('change', 'asdf123');
		});

		it('Should throw an error when no @ sign is inputted', () => {
			component.find(emailInput).simulate('change', 'asundar.com');
			component.simulate('submit');
			expect(component.find('.has-danger')).to.exist;
		});

		/*TODO: A Unit test in a positive case scenario, once react router is set up*/
	});
});
