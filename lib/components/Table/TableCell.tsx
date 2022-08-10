import React from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { useTableContext } from './TableContext';

export interface ITableCellProps extends React.ComponentProps<'th'>, React.ComponentProps<'td'> {
	component?: 'th';
}

export const TableCell = (props: ITableCellProps) => {

	const { variant } = useTableContext();

	const { children, component, ...rest } = props;

	return (
		<ConditionalWrapper
			condition={true}
			wrapper={children => (
				(variant === 'head' || component === 'th') ? (
					<th {...rest}>
						{children}
					</th>
				) :
					<td {...rest}>
						{children}
					</td>
			)}>
			{children}
		</ConditionalWrapper>
	);
};
