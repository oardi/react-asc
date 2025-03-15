import React from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import styles from './Table.module.scss';

export interface ITableProps extends React.ComponentProps<'table'> {
	striped?: boolean;
	bordered?: boolean;
	hover?: boolean;
	responsive?: boolean;
}

export const Table = (props: ITableProps): React.JSX.Element => {
	const { children, className, bordered, striped, hover, responsive = false, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.table);
		bordered && cssClasses.push(styles['bordered']);
		striped && cssClasses.push(styles['striped']);
		hover && cssClasses.push(styles['hover']);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ConditionalWrapper
			condition={responsive}
			wrapper={(children): React.JSX.Element => <div className={styles.tableResponsive}>{children}</div>}>
			<table className={getCssClasses()} {...rest}>
				{children}
			</table>
		</ConditionalWrapper>
	);
};
