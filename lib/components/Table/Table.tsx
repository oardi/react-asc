import React, { ReactElement } from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';

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
		cssClasses.push('table');
		bordered && cssClasses.push('table-bordered');
		striped && cssClasses.push('table-striped');
		hover && cssClasses.push('table-hover');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ConditionalWrapper
			condition={responsive}
			wrapper={children => <div className="table-responsive">{children}</div>}
		>
			<table className={getCssClasses()}>
				{children}
			</table>
		</ConditionalWrapper>
	);
}
