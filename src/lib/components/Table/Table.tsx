import React, { ReactElement } from 'react';

export interface ITableProps {
	children?: ReactElement | Array<ReactElement>;
	className?: string;
	striped?: boolean;
	bordered?: boolean;
	hover?: boolean;
	responsive?: boolean;
}

export const Table = ({ children, className, bordered, striped, hover, responsive }: ITableProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('table');
		cssClasses.push(className);
		bordered && cssClasses.push('table-bordered');
		striped && cssClasses.push('table-striped');
		hover && cssClasses.push('table-hover');
		return cssClasses.join(' ');
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

// extract
const ConditionalWrapper = ({ condition, wrapper, children }) =>
	condition ? wrapper(children) : children;
