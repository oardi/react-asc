import React from 'react';
import { TableContext } from './TableContext';

export const TableHead = (props: React.ComponentProps<"thead">) => {

	const { children, ...rest } = props;

	return (
		<TableContext.Provider value={ { variant: 'head' } }>
			<thead {...rest}>
				{children}
			</thead>
		</TableContext.Provider>
	);
}
