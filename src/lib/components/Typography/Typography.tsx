import React, { ReactElement } from 'react';

export interface IWrapperProps {
	as?: string;
	children: ReactElement;
	className?: string;
}

const Wrapper = (props: IWrapperProps) => {
	const { as = 'span', children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('gutter-bottom');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return React.createElement(as, { ...rest, className: getCssClasses() }, children);
}


export interface ITypographyProps {
	as?: string;
	children: any;
	className?: string;
	style?: any;
}

export const Typography = ({ children, as = 'span', ...rest }: ITypographyProps) => {
	return (
		<Wrapper as={as} {...rest}>
			{children}
		</Wrapper>
	)
}
