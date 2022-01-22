import React from 'react';

export interface ITabPanelProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
	value: string;
	index: string;
	className?: string;
}

export const TabPanel = (props: ITabPanelProps) => {

	const { children, className, value, index, ...rest } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...rest}
		>
			{ value === index && children }
		</div>
	);
}
