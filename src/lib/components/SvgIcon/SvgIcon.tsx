import React from 'react';

export interface ISvgIconProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	svg: string;
}

export const SvgIcon = (props: ISvgIconProp) => {

	const { svg, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`svg-icon`);
		cssClasses.push(props.className);
		return cssClasses.join(' ');
	}

	return (
		<div
			className={getCssClasses()}
			dangerouslySetInnerHTML={{ __html: svg }}
			{...rest}
		>
		</div>
	);
}
