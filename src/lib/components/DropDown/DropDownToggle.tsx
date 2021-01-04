import React, { Fragment, ReactNode } from 'react';

interface IDropDownToggleProps {
	children?: ReactNode;
}

export const DropDownToggle = ({ children }: IDropDownToggleProps) => {
	return (
		<Fragment>
			{ children }
		</Fragment>
	)
}
