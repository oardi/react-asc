import type { ReactElement } from 'react';
import React from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import styles from './Table.module.scss';

export interface ITableProps {
	children?: ReactElement | ReactElement[];
	className?: string;
	striped?: boolean;
	bordered?: boolean;
	hover?: boolean;
	responsive?: boolean;
}

export const Table = (props: ITableProps): JSX.Element => {

	const { children, className, bordered, striped, hover, responsive = false } = props;

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
			wrapper={(children): JSX.Element => <div className={styles.tableResponsive}>{children}</div>}
		>
			<table className={getCssClasses()}>
				{children}
			</table>
		</ConditionalWrapper>
	);
};
