import React, { Fragment, ReactNode } from 'react';

interface IMenuToggleProps {
	children?: ReactNode;
}

export const MenuToggle = ({ children }: IMenuToggleProps) => {
	return (
		<Fragment>
			{children}
		</Fragment>
	)
}
