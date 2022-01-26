import React from 'react';
import styles from './Typography.module.scss';

export interface IWrapperProps {
	as?: string;
	children: React.ReactNode;
	className?: string;
}

const Wrapper = (props: IWrapperProps) => {
	const { as = 'span', children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.typography);
		cssClasses.push(styles.as);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return React.createElement(as, { ...rest, className: getCssClasses() }, children);
}


export interface ITypographyProps extends React.ComponentProps<"span"> {
	as?: string;
}

export const Typography = ({ children, as = 'span', ...rest }: ITypographyProps) => {
	return (
		<Wrapper as={as} {...rest}>
			{children}
		</Wrapper>
	)
}
