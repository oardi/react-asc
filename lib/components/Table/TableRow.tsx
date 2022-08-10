import React from 'react';

export const TableRow = (props: React.ComponentProps<'tr'>) => {

	const { children, ...rest } = props;

	return (
		<tr {...rest} >
			{children}
		</tr>
	);
};
