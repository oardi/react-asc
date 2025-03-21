import React from 'react';
import { TableContext } from './TableContext';

export const TableBody = (props: React.ComponentProps<'tbody'>): React.JSX.Element => {
	const { children, ...rest } = props;

	return (
		<TableContext.Provider value={{ variant: 'body' }}>
			<tbody {...rest}>{children}</tbody>
		</TableContext.Provider>
	);
};
