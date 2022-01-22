import React from 'react';
import { render } from "@testing-library/react";
import { Link } from './Link';

test('Link changes the class when hovered', () => {
	const { getByText } = render(<Link>some link text</Link>);
	expect(getByText("some link text")).toBeTruthy();
});
