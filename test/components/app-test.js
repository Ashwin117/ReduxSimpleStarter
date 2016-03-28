import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
	var component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	describe('Header', () => {
		it('Shows a header', () => {
			expect(component.find('.login-title')).to.exist;
		});
	})

	describe('Login', () => {
		it('Shows a login container', () => {
			expect(component.find('.container-fluid')).to.exist;
		});
	});
});
