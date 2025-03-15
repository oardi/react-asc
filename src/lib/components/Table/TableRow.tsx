import React from 'react';

export const TableRow = (props: React.ComponentProps<'tr'>): React.JSX.Element => {
	const { children, ...rest } = props;

	return <tr {...rest}>{children}</tr>;
};
