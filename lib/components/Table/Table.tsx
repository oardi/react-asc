import React, { ReactElement } from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import styles from './Table.module.scss';

export interface ITableProps {
	children?: ReactElement | Array<ReactElement>;
	className?: string;
	striped?: boolean;
	bordered?: boolean;
	hover?: boolean;
	responsive?: boolean;
}

export const Table = (props: ITableProps) => {

	const { children, className, bordered, striped, hover, responsive = false } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
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
			wrapper={children => <div className={styles.tableResponsive}>{children}</div>}
		>
			<table className={getCssClasses()}>
				{children}
			</table>
		</ConditionalWrapper>
	);
}
