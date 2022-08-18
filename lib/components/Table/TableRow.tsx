import React from 'react';

export const TableRow = (props: React.ComponentProps<'tr'>): JSX.Element => {

	const { children, ...rest } = props;

	return (
		<tr {...rest} >
			{children}
		</tr>
	);
};
