import React from 'react';
import ReactDOM from 'react-dom';

// import { render, screen } from '@testing-library/react';
import { AppContainer } from './AppContainer';

// test('renders getting started', () => {
// 	render(<AppContainer />);
// 	const linkElement = screen.getByText(/react-asc/i);
// 	expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AppContainer />, div);
});
